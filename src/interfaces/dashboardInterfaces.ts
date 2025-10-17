import type { DashboardType, TransactionFormType, TransactionLine } from "@src/types/dashboardTypes";

export interface DashboardState {
  dashboardState: DashboardType;
  loading: boolean;
  error?: string | null;

  setDashboardState: (DashboardState: DashboardType) => void;
  setLoading: (loading: boolean) => void;
  setError?: (error: string | null) => void;

}

// this is for store 

export interface TransactionFormState {
  transaction: TransactionFormType;
  transactionLine: TransactionLine[];
  
  setTransaction: (update: Partial<TransactionFormType>) => void; // ✅ FIXED
  setTransactionLine: (transactionLine: TransactionLine[]) => void;
  updateTransactionLine: (index: number, update: Partial<TransactionLine>) => void;

}

// responsive dialog
export interface ResponsiveDialogProps {
  handleClose: () => void;
  title: string;
  content: string;
  textCancel: string;
  textConfirm: string;
  icon?: React.ElementType;
  iconColor?: string;
}