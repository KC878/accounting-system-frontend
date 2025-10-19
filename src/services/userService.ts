import apiClient from "@src/services/apiClient"

import type { UserType } from "@src/types/types"
import type { TransactionFormPost } from "@src/types/dashboardTypes"

// Register a new user
export const registerUser = async (data: UserType) => {
  const response = await apiClient.post(process.env.NEXT_PUBLIC_API_USER_REGISTER!, data);

  return response;
};


// Login User
export const loginUser = async (data: UserType) => {
  const response = await apiClient.post(process.env.NEXT_PUBLIC_API_USER_LOGIN!, data, {
    withCredentials: true, 
  });

  return response;
}

// Logout User
export const logoutUser = async(csrftoken: string) => {
  const response = await apiClient.post(process.env.NEXT_PUBLIC_API_USER_LOGOUT!, {}, {
    withCredentials: true,
    headers: {
      "X-CSRFToken": csrftoken,
    },
  })

  return response;
}


export const createTransaction = async(csrftoken: string, payload: TransactionFormPost) => {
  const response = await apiClient.post(process.env.NEXT_PUBLIC_API_USER_CREATE_TRANSACTION!, payload, {
    withCredentials: true,
    headers: {
      "X-CSRFToken": csrftoken,
    },
  })

  return response;
}