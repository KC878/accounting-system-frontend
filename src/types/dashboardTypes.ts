export type DashboardType = {
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  sex: string;
}

export type TransactionFormType = {
  
  // transaction
  created_by: string;
  transaction_date: string;
  description: string;
}

// transactionline -- data 
export type TransactionLine = {
  id: number,
  error: boolean,
  // account
  account_name: string;
  account_type: string;
  normal_balance: string;

  // transactionline
  debit_amount: number | null;
  credit_amount: number | null;
  notes: string;
}

// transaction line --> state
export type Account = {
  id: number;
  accountName: string;
  type: string;
  description: string;
  normalBalance: string;
};

// transaction line
export type AccountType = {
  type: string;
  account: Account[];
};


