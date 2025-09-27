"use client";

import Form from "@src/components/Form";
import { useState } from "react";
import type { UserType, InputFieldType } from "@src/types/types";

export default function Home() {
  const [formData, setFormData] = useState<UserType>({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    });
    // You can call an API here
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
