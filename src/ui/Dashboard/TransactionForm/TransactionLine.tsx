"use client";

import React, { useState } from "react";
import Text from "@src/components/Text";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

import { account } from "@src/constants/accounts";

type Account = {
  id: number;
  accountName: string;
  type: string;
  description: string;
  normalBalance: string;
};

type AccountType = {
  type: string;
  account: Account[];
};

const TransactionLine = () => {
  const accountValues = {
    assets: account.assets,
    equity: account.equity,
    liabilities: account.liabilities,
    revenue: account.revenue,
    expenses: account.expenses,
  };

  const [formData, setFormData] = useState({
    type: "",
    account: "",
    debit: "",
    credit: "",
    description: "",
  });

  const [accountType, setAccountType] = useState<AccountType>({
    type: "",
    account: [],
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "type") {
      const key = value as keyof typeof accountValues;
      setAccountType({
        type: key,
        account: accountValues[key],
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex flex-col my-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Text
              text="Transaction Lines"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#1a1a1a",
              }}
            />
          </div>

          <div>
            <FormControl fullWidth size="small">
              <InputLabel id="label-type">Type</InputLabel>
              <Select
                labelId="label-type"
                name="type"
                label="Type"
                value={formData.type}
                onChange={handleSelectChange}
                sx={{
                  fontSize: 12,
                  ".MuiSelect-select": {
                    paddingY: 0.6,
                    paddingX: 2,
                    width: 60,
                  },
                }}
              >
                <MenuItem value="assets">Assets</MenuItem>
                <MenuItem value="liabilities">Liabilities</MenuItem>
                <MenuItem value="equity">Equity</MenuItem>
                <MenuItem value="revenue">Revenue</MenuItem>
                <MenuItem value="expenses">Expenses</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      {/* ACCOUNT, DEBIT, CREDIT */}
      <div className="flex flex-row gap-4 mt-1">
        {/* Account */}
        <div className="flex-2 flex flex-col gap-1">
          <Text
            text="Account"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          />
          <FormControl fullWidth>
            <Select
              name="account"
              value={formData.account}
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => {
                if (!selected)
                  return <span style={{ color: "#aaa" }}>Select Account</span>;

                return (
                  <span
                    style={{
                      display: "block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {selected.charAt(0).toUpperCase() + selected.slice(1)}
                  </span>
                );
              }}
              sx={{
                mb: 2,
                "& .MuiInputBase-input": { padding: "9px 12px" },
                overflow: "auto",
                width: 180,
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 350,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(0,0,0,0.2) transparent",
                  },
                },
              }}
            >
              {accountType.account.map((item, index) => (
                <MenuItem key={index} value={item.accountName}>
                  {index + 1}. {item.accountName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Debit */}
        <div className="flex-[1.5] flex flex-col gap-1">
          <Text
            text="Debit"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          />
          <TextField
            name="debit"
            value={formData.debit}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-root": { height: 40 },
              "& .MuiInputBase-input": { padding: "8px 12px" },
            }}
          />
        </div>

        {/* Credit */}
        <div className="flex-[1.5] flex flex-col gap-1">
          <Text
            text="Credit"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#1a1a1a",
            }}
          />
          <TextField
            name="credit"
            value={formData.credit}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-root": { height: 40 },
              "& .MuiInputBase-input": { padding: "8px 12px" },
            }}
          />
        </div>
      </div>

      {/* Description */}
      <TextField
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
        placeholder="Description"
        sx={{
          mb: 2,
          "& .MuiInputBase-root": { height: 40 },
          "& .MuiInputBase-input": { padding: "8px 12px" },
        }}
      />
    </div>
  );
};

export default TransactionLine;
