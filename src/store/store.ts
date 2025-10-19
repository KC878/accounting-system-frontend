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

// initial State
const initialState = {
  transaction: {
    created_by: "",
    transaction_date: "",
    description: "",
  },
  transactionLine: [],
}

export const useTransactionForm = create<TransactionFormState>((set) => (
  {
    ...initialState, 

    // partial update handler
    setTransaction: (update) =>
      set((state) => ({
        transaction: {
          ...state.transaction,
          ...update, // merge only changed fields
        },
      })),
    
    //replace entire transaction array
    setTransactionLine: (lines) => set({ transactionLine: lines}),

    // update specific item inside the array
    updateTransactionLine: (index, update) => 
      set((state) => {
        const updated = [...state.transactionLine];
        updated[index] = {...updated[index], ...update};

        return { transactionLine: updated };
      }), 

    reset: () => set(initialState),
}))



