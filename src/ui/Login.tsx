import React, { useState } from "react";
import Form from "@src/components/Form";
import { HomeModeType, InputFieldType, UserType } from "@src/types/types";
import { icon } from "@src/constants/icons";

const Login: React.FC<HomeModeType> = ({ homeUI, setHomeUI }) => {
  // define metadata
  // states
  // types

  const [formData, setFormData] = useState<UserType>({
    username: "",
    password: "",
  });

  // const [formError, setFormError] = useState<Partial<UserType>>({});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = e.target;

    // logic handleCHange here
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // logic handleSubmit
  };

  const input: InputFieldType[] = [
    {
      fieldOption: 0,
      label: "Username",
      name: "username",
      type: "normal",
      // error: !!formError.username,
      // helperText: formError.username,
      icon: icon.username,
    },
    {
      fieldOption: 0,
      label: "Password",
      name: "password",
      type: "password",
      // error: !!formError.password,
      // helperText: formError.password,
      icon: icon.password,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
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
