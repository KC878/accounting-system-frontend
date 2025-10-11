"use client";

import React, { useState } from "react";
import Form from "@src/components/Form";
import {
  HomeModeType,
  InputFieldType,
  StatusType,
  UserType,
} from "@src/types/types";

// navigation
import { useRouter } from "next/navigation";

import { icon } from "@src/constants/icons";
import { loginUser } from "@src/services/userService";
import { AxiosError } from "axios";
import Notification from "@src/components/Notification";
import { setCookie } from "@src/utils/utils";
import { useDashboard } from "@src/store/store";
import { DashboardType } from "@src/types/dashboardTypes";

const Login: React.FC<HomeModeType> = ({ homeUI, setHomeUI }) => {
  // state managers
  const { dashboardState, loading, setDashboardState, setLoading } =
    useDashboard();

  // navigation
  const router = useRouter();

  const [formData, setFormData] = useState<UserType>({
    username: "",
    password: "",
  });

  // stores type error | ok | warning
  const [formError, setFormError] = useState<Partial<StatusType>>({});

  const [notification, setNotification] = useState<{
    id: number;
    message: string;
    severity: "error" | "success";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    // get actual input
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, // [name] refers to the key of an object
    });

    // logic handleCHange here
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // prevent restart
    e.preventDefault();
    try {
      setLoading(true);
      // call axios service loginUser
      const result = await loginUser(formData);

      // reset form only on success
      if (result && result.status === 200) {
        // set notification to now, creates a unique value so that usestate re-renders the data

        setNotification({
          id: Date.now(), // unique
          message: "User logged in successfully!",
          severity: "success",
        });
        setFormData({
          username: "",
          password: "",
        });
        setFormError({});

        // this for development only
        const sessionid = result.data.sessionid;
        const csrftoken = result.data.csrftoken;

        // store cookie manually (-> communicate with middleware)
        setCookie("sessionid", sessionid);
        setCookie("csrftoken", csrftoken);

        const user: DashboardType = result.data.user;
        setTimeout(() => {
          setDashboardState(user);
        }, 2000);

        // activate routing here
        router.push("/dashboard");
      }
    } catch (err) {
      const axiosErr = err as AxiosError<any>;

      if (axiosErr.response) {
        // IF ERROR
        setLoading(false);

        console.error("Status: ", axiosErr.response.status);
        console.error("Error data: ", axiosErr.response.data);
        console.log("Try Error: ", formError);

        // backend error
        setFormError((prev) => ({
          ...prev,
          ...axiosErr.response?.data,
        }));

        if (axiosErr.response?.status === 401) {
          setNotification({
            id: Date.now(), // unique
            message: "Invalid credentials",
            severity: "error",
          });
        }
      } else {
        console.error("Registration Error: ", axiosErr.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const input: InputFieldType[] = [
    {
      fieldOption: 0,
      label: "Username",
      name: "username",
      type: "normal",
      icon: icon.username,
    },
    {
      fieldOption: 0,
      label: "Password",
      name: "password",
      type: "password",
      icon: icon.password,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {notification && (
        <div>
          <Notification
            key={notification.id}
            message={notification.message}
            severity={notification.severity}
          />
        </div>
      )}

      <Form
        formHeaderTitle={"Login"}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
        buttonSubmitName={loading ? "Loading" : "Login"}
        homeMode={{
          homeUI,
          setHomeUI,
        }}
      />
    </div>
  );
};

export default Login;
