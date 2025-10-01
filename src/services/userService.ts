import apiClient from "@src/services/apiClient"

import type { UserType } from "@src/types/types"

// Register a new user
export const registerUser = async (data: UserType) => {
  const response = await apiClient.post("api/users/register", data);

  return response;
};


// Login User
export const loginUser = async (data: UserType) => {
  const response = await apiClient.post("api/users/login", data, {
    withCredentials: true, 
  });

  return response;
}