import React from "react";

import Text from "@src/components/Text";

import TextField from "@mui/material/TextField";
import { FormControl, Select, MenuItem } from "@mui/material";
// create logic to bind data for each of the declared data
// if for example two more transaction Lines
const TransactionLine = () => {
  return (
    <>
      {/* Example if adding another */}
      <div className="flex flex-col">
        <div className="flex flex-col my-2">
          <Text
            text={"Transaction Lines"}
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#1a1a1a",
            }}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex-2 flex flex-col gap-1">
            <Text
              text={"Account"}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            />
            <FormControl fullWidth>
              <Select
                value={"Default Value"}
                //onChange
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
                    padding: "9px 12px", // adjust text padding inside
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"assets"}>Assets</MenuItem>
                <MenuItem value={"equity"}>Equity</MenuItem>
                <MenuItem value={"liability"}>Liability</MenuItem>
                <MenuItem value={"revenue"}>Revenue</MenuItem>
                <MenuItem value={"expenses"}>Expenses</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex-[1.5] flex flex-col gap-1">
            <Text
              text={"Debit"}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
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
                  height: 40, // overall height of input
                },
                "& .MuiInputBase-input": {
                  padding: "8px 12px", // adjust text padding inside
                },
              }}
            />
          </div>

          <div className="flex-[1.5] flex flex-col gap-1">
            <Text
              text={"Credit"}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
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
                  height: 40, // overall height of input
                },
                "& .MuiInputBase-input": {
                  padding: "8px 12px", // adjust text padding inside
                },
              }}
            />
          </div>
        </div>
        <div className="">
          <TextField
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                height: 40, // overall height of input
              },
              "& .MuiInputBase-input": {
                padding: "8px 12px", // adjust text padding inside
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionLine;
