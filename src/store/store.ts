import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DashboardState } from '@src/interfaces/dashboardInterfaces';


export const useDashboard = create<DashboardState>()(
  persist(
    (set) => ({
      dashboardState: {
        username: '',
        first_name: '',
        last_name: '',
        role: '',
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

