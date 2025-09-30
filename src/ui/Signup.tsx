"use client";

import Form from "@src/components/Form";
import React, { useState } from "react";
import type { UserType, InputFieldType, HomeModeType } from "@src/types/types";
import { registerUser } from "@src/services/userService";
import { AxiosError } from "axios";
import { icon } from "@src/constants/icons";

const Signup: React.FC<HomeModeType> = ({ homeUI, setHomeUI }) => {
  const [formData, setFormData] = useState<UserType>({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  // only store relevant keyfield with errors from UserType
  const [formError, setFormError] = useState<Partial<UserType>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = e.target;

    // get inputRule for this field
    // basically just a way to tie which input field is being accessed for the change
    const field = input.find((f) => f.name === name);

    let newValue = value;

    // enforce input rules
    if (field?.inputRule?.allowOnly === "letters") {
      // allow only letters and space
      newValue = newValue.replace(/[^a-zA-Z ]/g, "");

      // converts every first letter of a word to capital
      newValue = newValue.replace(/\b[a-z]/g, (match: string) =>
        match.toUpperCase()
      ); // n
    }

    // update form data
    setFormData({
      ...formData,
      [name]: newValue, // [name] refers to the key of an object
    });

    // password validation
    if (name === "password" && value.length < 8) {
      setFormError((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters",
      }));
    } else {
      // clean error when fixed
      setFormError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // final validation before submit
    const newErrors: Partial<UserType> = {}; // meaning error refers to the Key of UserType
    if (formData.password.length < 8) newErrors.password = "Password too short";

    if (Object.keys(newErrors).length > 0) {
      setFormError(newErrors);

      return; // stop submission
    }

    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const result = await registerUser(formData);

      console.log("User registered", result);
      console.log("Status: ", result.status);
      // reset form only on success
      if (result && result.status === 201) {
        alert("Success");
        setFormData({
          username: "",
          password: "",
          email: "",
          first_name: "",
          last_name: "",
        });
        setFormError({});
      }
    } catch (err) {
      const axiosErr = err as AxiosError<any>;

      if (axiosErr.response) {
        console.error("Status: ", axiosErr.response.status);
        console.error("Error data: ", axiosErr.response.data);

        // backend error
        setFormError((prev) => ({
          ...prev,
          ...axiosErr.response?.data,
        }));
      } else {
        console.error("Registration Error: ", axiosErr.message);
      }
    }
  };

  const input: InputFieldType[] = [
    {
      fieldOption: 0,
      label: "Username",
      name: "username",
      type: "normal",
      error: !!formError.username,
      helperText: formError.username,
      icon: icon.username,
    },
    {
      fieldOption: 0,
      label: "Password",
      name: "password",
      type: "password",
      error: !!formError.password,
      helperText: formError.password,
      icon: icon.password,
    },
    {
      fieldOption: 0,
      label: "Email",
      name: "email",
      type: "email",
      error: !!formError.email,
      helperText: formError.email,
      icon: icon.email,
    },
    {
      fieldOption: 0,
      label: "First Name",
      name: "first_name",
      type: "text",
      inputRule: { allowOnly: "letters" },
      icon: icon.name,
    },
    {
      fieldOption: 0,
      label: "Last Name",
      name: "last_name",
      type: "text",
      inputRule: { allowOnly: "letters" },
      icon: icon.name,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Form
        formHeaderTitle={"Signup"}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
        buttonSubmitName={"Signup"}
        homeMode={{
          homeUI,
          setHomeUI,
        }}
      />
    </div>
  );
};

export default Signup;
