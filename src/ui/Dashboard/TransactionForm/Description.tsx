import React from "react";
import Text from "@src/components/Text";
import TextField from "@mui/material/TextField";

const Description = () => {
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
        variant="outlined"
        fullWidth
        required
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
