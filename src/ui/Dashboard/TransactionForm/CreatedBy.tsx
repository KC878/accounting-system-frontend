"use client";

import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Text from "@src/components/Text";

import { useDashboard } from "@src/store/store";
import { useTransactionForm } from "@src/store/store";

const CreatedBy = () => {
  const { dashboardState } = useDashboard();

  const { setTransaction } = useTransactionForm();

  // bind the key of the user for now this is for displaying options
  const user = dashboardState.first_name + " " + dashboardState.last_name;

  const [createdBy, setCreatedBy] = useState<string>(user);

  // handle change event
  const handleChange = (event: SelectChangeEvent) => {
    setCreatedBy(event.target.value);

    setTransaction({ created_by: event.target.value });

    console.log(event.target.value);

    // Access latest value immediately after updating:
    const newState = useTransactionForm.getState();
    console.log("Updated CreatedBy:", newState.transaction);
  };
  return (
    <>
      <Text
        text={"Created By"}
        sx={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#1a1a1a",
        }}
      />
      <FormControl fullWidth>
        <Select
          // bind this to useState for change
          value={createdBy}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          renderValue={(selected) => {
            if (!selected) {
              return <span style={{ color: "#aaa" }}>Select Gender</span>;
            }
            return selected.charAt(0).toUpperCase() + selected.slice(1);
          }}
          sx={{
            mb: 2,

            "& .MuiInputBase-input": {
              padding: "16px 12px", // adjust text padding inside
            },
          }}
        >
          <MenuItem value={user}>{user}</MenuItem>
          <MenuItem value={"user2"}>User 2</MenuItem>
          <MenuItem value={"user3"}>User 3</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default CreatedBy;
