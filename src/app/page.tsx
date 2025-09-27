"use client";

import Form from "@src/components/Form";
import { useState } from "react";
import type { UserType, InputFieldType } from "@src/types/types";
import { registerUser } from "@src/services/userService";

export default function Home() {
  const [formData, setFormData] = useState<UserType>({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    });

    try {
      const data: UserType = {
        password: formData.password,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
      };
      const result = await registerUser(data);
      console.log("User registered: ", result);
    } catch (err) {
      console.error("Registration failed: ", err);
    }
  };

  const input: InputFieldType[] = [
    { fieldOption: 0, label: "Username", name: "username", type: "normal" },
    { fieldOption: 0, label: "Password", name: "password", type: "password" },
    { fieldOption: 0, label: "Email", name: "email", type: "email" },
    { fieldOption: 0, label: "First Name", name: "firstName", type: "normal" },
    { fieldOption: 0, label: "Last Name", name: "lastName", type: "normal" },
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
      />
    </div>
  );
}
