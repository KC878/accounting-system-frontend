const assets = [
  {id: 1, accountName: 'Cash on Hand', type: 'assets', description: 'Physical cash available', normalBalance: 'debit'},
  {id: 2, accountName: 'Cash in Bank', type: 'assets', description: "Company's bank account balance", normalBalance: 'debit'},
  {id: 3, accountName: 'Accounts Receivable', type: 'assets', description: 'Amounts owed by customers', normalBalance: 'debit'},
  {id: 4, accountName: 'Notes Receivable', type: 'assets', description: 'Promissory notes due to company', normalBalance: 'debit'},
  {id: 5, accountName: 'Inventory', type: 'assets', description: 'Goods held for sale', normalBalance: 'debit'},
  {id: 6, accountName: 'Prepaid Expenses', type: 'assets', description: 'Payments made in advance', normalBalance: 'debit'},
  {id: 7, accountName: 'Supplies', type: 'assets', description: 'Office or shop supplies', normalBalance: 'debit'},
  {id: 8, accountName: 'Equipment', type: 'assets', description: 'Office/factory equipment', normalBalance: 'debit'},
  {id: 9, accountName: 'Accumulated Depreciation – Equipment', type: 'assets', description: 'Contra-asset (reduces equipment value)', normalBalance: 'credit'},
  {id: 10, accountName: 'Land', type: 'assets', description: 'Land owned by the business', normalBalance: 'debit'},
  {id: 11, accountName: 'Buildings', type: 'assets', description: 'Company-owned buildings', normalBalance: 'debit'},
  {id: 12, accountName: 'Vehicles', type: 'assets', description: 'Company cars or trucks', normalBalance: 'debit'}
];

const equity = [
  {id: 1, accountName: "Owner's Capital", type: 'equity', description: "Owner's initial investment", normalBalance: 'credit'},
  {id: 2, accountName: "Owner's Drawings (or Withdrawals)", type: 'equity', description: 'Withdrawals by owner', normalBalance: 'debit'},
  {id: 3, accountName: 'Retained Earnings', type: 'equity', description: 'Accumulated profits not withdrawn', normalBalance: 'credit'},
  {id: 4, accountName: 'Common Stock', type: 'equity', description: 'Issued shares of ownership', normalBalance: 'credit'},
  {id: 5, accountName: 'Preferred Stock', type: 'equity', description: 'Shares with fixed dividends', normalBalance: 'credit'},
  {id: 6, accountName: 'Additional Paid-in Capital', type: 'equity', description: 'Extra money received from investors', normalBalance: 'credit'}
];

const liabilities = [
  {id: 1, accountName: 'Accounts Payable', type: 'liabilities', description: 'Amounts owed to suppliers', normalBalance: 'credit'},
  {id: 2, accountName: 'Notes Payable', type: 'liabilities', description: 'Promissory notes payable', normalBalance: 'credit'},
  {id: 3, accountName: 'Salaries Payable', type: 'liabilities', description: 'Unpaid employee wages', normalBalance: 'credit'},
  {id: 4, accountName: 'Interest Payable', type: 'liabilities', description: 'Interest due on borrowings', normalBalance: 'credit'},
  {id: 5, accountName: 'Taxes Payable', type: 'liabilities', description: 'Taxes owed to the government', normalBalance: 'credit'},
  {id: 6, accountName: 'Unearned Revenue', type: 'liabilities', description: 'Cash received before earning', normalBalance: 'credit'},
  {id: 7, accountName: 'Utilities Payable', type: 'liabilities', description: 'Bills incurred but not yet paid', normalBalance: 'credit'},
  {id: 8, accountName: 'Mortgage Payable', type: 'liabilities', description: 'Long-term debt for property', normalBalance: 'credit'}
];

const revenue = [
  { id: 1, accountName: 'Service Revenue', type: 'revenues', description: 'Income from services rendered', normalBalance: 'credit' },
  { id: 2, accountName: 'Sales Revenue', type: 'revenues', description: 'Income from selling goods', normalBalance: 'credit' },
  { id: 3, accountName: 'Interest Income', type: 'revenues', description: 'Earnings from interest', normalBalance: 'credit' },
  { id: 4, accountName: 'Rent Income', type: 'revenues', description: 'Income from renting property', normalBalance: 'credit' },
  { id: 5, accountName: 'Commission Income', type: 'revenues', description: 'Commission earned', normalBalance: 'credit' },
  { id: 6, accountName: 'Other Income', type: 'revenues', description: 'Miscellaneous earnings', normalBalance: 'credit' }
];

const expenses = [
  { id: 1, accountName: 'Rent Expense', type: 'expenses', description: 'Cost of office or building rent', normalBalance: 'debit' },
  { id: 2, accountName: 'Salaries Expense', type: 'expenses', description: 'Employee wages', normalBalance: 'debit' },
  { id: 3, accountName: 'Utilities Expense', type: 'expenses', description: 'Water, electricity, etc.', normalBalance: 'debit' },
  { id: 4, accountName: 'Supplies Expense', type: 'expenses', description: 'Supplies consumed', normalBalance: 'debit' },
  { id: 5, accountName: 'Depreciation Expense', type: 'expenses', description: 'Periodic cost allocation of assets', normalBalance: 'debit' },
  { id: 6, accountName: 'Insurance Expense', type: 'expenses', description: 'Cost of insurance', normalBalance: 'debit' },
  { id: 7, accountName: 'Advertising Expense', type: 'expenses', description: 'Marketing and promotion costs', normalBalance: 'debit' },
  { id: 8, accountName: 'Repairs and Maintenance Expense', type: 'expenses', description: 'Upkeep of assets', normalBalance: 'debit' },
  { id: 9, accountName: 'Taxes Expense', type: 'expenses', description: 'Business taxes', normalBalance: 'debit' },
  { id: 10, accountName: 'Miscellaneous Expense', type: 'expenses', description: 'Other small costs', normalBalance: 'debit' }
];

export const account = {
  assets: assets,
  equity: equity,
  liabilities: liabilities,
  revenue: revenue,
  expenses: expenses,
}

