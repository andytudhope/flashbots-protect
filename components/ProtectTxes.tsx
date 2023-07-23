import { TransactionHash } from "./TransactionHash";
import useFetchProtectTxes from "~~/hooks/useFetchProtectTxes";
import { Transaction } from "~~/types/transaction";

const ProtectTxes = () => {
  const [filteredTransactions, loading, error] = useFetchProtectTxes();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <table className="table table-zebra w-full shadow-lg">
        <thead>
          <tr>
            <th className="bg-primary">Transaction Hash</th>
            <th className="bg-primary">Block Number</th>
            <th className="bg-primary">Bundle Type</th>
            <th className="bg-primary">Rebate Hash</th>
            <th className="bg-primary">Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((txn: Transaction) => (
            <tr key={txn.transaction_hash}>
              <td>
                <TransactionHash hash={txn.transaction_hash} />
              </td>
              <td>{txn.block_number}</td>
              <td>{txn.bundle_type}</td>
              <td>
                <TransactionHash hash={txn.hash} />
              </td>
              <td>
                {txn.value ? "Ξ " + (txn.value / 10 ** 18).toFixed(4) : 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProtectTxes;
