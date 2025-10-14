"use client";
import React, { useState } from "react";
import Text from "@src/components/Text";
import TextField from "@mui/material/TextField";

const Description = () => {
  const [description, setDescription] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDescription(value);
    console.log(value);
  };
  return (
    <>
      <Text
        text={"Description"}
        sx={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#1a1a1a",
        }}
      />
      <TextField
        name="description"
        value={description}
        variant="outlined"
        fullWidth
        required
        onChange={handleChange}
        placeholder="Description"
        sx={{
          mb: 2,
          "& .MuiInputBase-root": {
            height: 50, // overall height of input
          },
          "& .MuiInputBase-input": {
            padding: "8px 12px", // adjust text padding inside
          },
        }}
      />
    </>
  );
};

export default Description;
