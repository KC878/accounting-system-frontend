import apiClient from "@src/services/apiClient"

import type { UserType } from "@src/types/types"

// Register a new user
export const registerUser = async (data: UserType) => {
  const response = await apiClient.post(process.env.NEXT_PUBLIC_API_USER_REGISTER!, data);

  return response;
};


// Login User
export const loginUser = async (data: UserType) => {
  const response = await apiClient.post(process.env.NEXT_PUBLIC_API_USER_LOGIN!, data);

  return response;
  
}