import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Transaction } from "~~/types/transaction";

interface Block {
  block_number: number;
  transactions: Transaction[];
}

const useFetchProtectTxes = (): [Transaction[], boolean, string | null] => {
  const connectedAccount = useAccount();
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // test with: 0x19FB576F7f5A863eC1c699Bdb096368812c9D3b4 - carlosanthony.eth
  const url =
    "https://blocks.flashbots.net/v1/blocks?from=" + connectedAccount.address;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<{ blocks: Block[] }> = await axios.get(
          url
        );
        const { blocks } = response.data;

        // Filter the transactions: we're only interested in transactions sent from this address
        const filteredTxns: Transaction[] = blocks.flatMap((block: Block) =>
          block.transactions.filter(
            (txn: Transaction) => txn.eoa_address === connectedAccount.address
          )
        );

        setFilteredTransactions(filteredTxns);

        // To keep our query to etherscan quick, let's filter out all but the flashbots bundle types
        const potentialBlocks = Array.from(
          new Set(
            blocks.flatMap((block: Block) =>
              block.transactions
                .filter(
                  (txn: Transaction) =>
                    txn.bundle_type === "flashbots" &&
                    txn.eoa_address === connectedAccount.address
                )
                .map((txn: Transaction) => txn.block_number)
            )
          )
        );

        potentialBlocks.map(async (blockNumber) => {
          // now we fetch the txes for the connected address only in the block associated with a potential flashbot protect tx
          const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
          const etherscanResponse: AxiosResponse<{ result: Transaction[] }> =
            await axios.get(
              `https://api.etherscan.io/api?module=account&action=txlist&address=${connectedAccount.address}&startblock=${blockNumber}&endblock=${blockNumber}&sort=asc&apikey=${etherscanApiKey}`
            );
          // check to see if there are any transactions from flashbots-builder.eth
          const { result } = etherscanResponse.data;
          if (Array.isArray(result)) {
            const rebateTxn = result.find(
              (txn) => txn.from === "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5"
            );
            console.log("Found a candidate rebate tx: ", rebateTxn);
            if (rebateTxn) {
              // Update the filteredTransactions array with hash and value of the rebate transaction
              const updatedTransactions = filteredTransactions.map((txn) =>
                txn.block_number === blockNumber
                  ? { ...txn, hash: rebateTxn.hash, value: rebateTxn.value }
                  : txn
              );
              setFilteredTransactions(updatedTransactions);
            }
          }
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [url, connectedAccount.address]);

  return [filteredTransactions, loading, error];
};

export default useFetchProtectTxes;
