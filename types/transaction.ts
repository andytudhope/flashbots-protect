export interface Transaction {
  transaction_hash: string;
  block_number: number;
  tx_index: number;
  eoa_address: string;
  eth_sent_to_fee_recipient: string;
  bundle_type: string;
  from: string;
  hash: string;
  value: number;
}
