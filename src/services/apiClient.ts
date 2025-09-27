import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
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