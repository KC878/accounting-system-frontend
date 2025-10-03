import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



// Optional: interceptors (for auth, logging, etc.)
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // or cookies/session
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default apiClient;