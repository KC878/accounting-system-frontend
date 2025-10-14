export type DashboardType = {
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  sex: string;
}

export type TransactionFormType = {
  // account
  account_name: string;
  account_type: string;
  normal_balance: string;

  // transaction
  created_by: string;
  transaction_date: string;
  description: string;

  // transactionline
  debit_amount: number;
  credit_amount: number;
  notes: string;
}