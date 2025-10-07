import React, { useState } from "react";
import Form from "@src/components/Form";
import {
  HomeModeType,
  InputFieldType,
  StatusType,
  UserType,
} from "@src/types/types";

import { icon } from "@src/constants/icons";
import { loginUser } from "@src/services/userService";
import { AxiosError } from "axios";
import Notification from "@src/components/Notification";
import { useNavigate } from "@src/lib/navigate";
import { useRouter } from "next/navigation";

const Login: React.FC<HomeModeType> = ({ homeUI, setHomeUI }) => {
  // navigation
  // const { login } = useNavigate();
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

        // after every checks run the login redirect function
        // login()
        // console.log("SessionId: ", result.data.sessionid);

        // this is for development only
        const sessionid = result.data.sessionid; // store session id from auth user to variable

        // store in cookie manually (so middleware can read it )
        document.cookie = `sessionid=${sessionid}; path=/; samesite=none; secure`;

        window.location.href= "/dashboard"; 
      }
    } catch (err) {
      const axiosErr = err as AxiosError<any>;

      if (axiosErr.response) {
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
        console.error("Login Error: ", axiosErr.message);
      }
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
        buttonSubmitName={"Login"}
        homeMode={{
          homeUI,
          setHomeUI,
        }}
      />
    </div>
  );
};

export default Login;
