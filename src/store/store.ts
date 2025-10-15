import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DashboardState, TransactionFormState } from '@src/interfaces/dashboardInterfaces';

export const useDashboard = create<DashboardState>()(
  persist(
    (set) => ({
      dashboardState: {
        username: '',
        first_name: '',
        last_name: '',
        role: '',
        sex: '',
      },

      loading: false,
      error: null,

      setDashboardState: (data) => set({dashboardState: data }),
      setLoading: (loading) => set({loading}),
      setError: (error) => set({error}),
    }),
    {
      name: 'dashboard-storage',

    }
  )
);


export const useTransactionForm = create<TransactionFormState>((set) => (
  {
    transaction: {
    account_name: "",
    account_type: "",
    normal_balance: "",
    created_by: "",
    transaction_date: "",
    description: "",
    debit_amount: 0,
    credit_amount: 0,
    notes: "",
  },
    // ✅ partial update handler
    setTransaction: (update) =>
      set((state) => ({
        transaction: {
          ...state.transaction,
          ...update, // merge only changed fields
        },
      })),
}))



