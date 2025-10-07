"use client";

import { useRouter } from 'next/navigation';

export const useNavigate = () => {
  const router = useRouter();

  // after login goto dashboard
  const login = () => {
    console.log("Redirecting to dashboard --> ");
    router.push('/dashboard');
  }


  // use this for logout only option 
  const replaceWith = (path: string) => {
    router.replace(path);
  }
 
  return {login, replaceWith};
};