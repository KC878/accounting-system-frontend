import type { DashboardType, TransactionFormType } from "@src/types/dashboardTypes";

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
  setTransaction: (update: Partial<TransactionFormType>) => void; // ✅ FIXED
}