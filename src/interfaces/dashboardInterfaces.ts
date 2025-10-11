import type { DashboardType } from "@src/types/dashboardTypes";

export interface DashboardState {
  dashboardState: DashboardType;
  loading: boolean;
  error?: string | null;

  setDashboardState: (DashboardState: DashboardType) => void;
  setLoading: (loading: boolean) => void;
  setError?: (error: string | null) => void;

}