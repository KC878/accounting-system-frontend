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
import type { AccountType } from "@src/types/dashboardTypes";
import { account } from "@src/constants/accounts";
import { useTransactionForm } from "@src/store/store";

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
    debit: 0,
    credit: 0,
    notes: "",
  });

  const [accountType, setAccountType] = useState<AccountType>({
    type: "",
    account: [],
  });

  const { transaction, setTransaction } = useTransactionForm();

  // inputCred_Deb
  const inputCred_Deb = [
    { text: "Debit", name: "debit", value: formData.debit },
    { text: "Credit", name: "credit", value: formData.credit },
  ];

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // logic for select accountType
    if (name === "type") {
      const key = value as keyof typeof accountValues;

      // store in variable first
      const updatedType = {
        type: key,
        account: accountValues[key],
      };

      // update State
      setAccountType(updatedType);

      console.log("Account: ", updatedType);
      // stores the immediate value of type
      setTransaction({
        account_type: updatedType.type,
      });
    }

    // logic for select account
    if (name === "account") {
      // find the selected account based on the name

      const selectedAccount = accountType.account.find(
        (acc) => acc.accountName === value // find the value selected for account
      );

      if (selectedAccount) {
        // store both accountName and normalBalance into transaction
        setTransaction({
          account_name: selectedAccount.accountName,
          normal_balance: selectedAccount.normalBalance,
        });
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "debit") {
      setTransaction({ debit_amount: Number(value) });
    }
    if (name === "credit") {
      setTransaction({ credit_amount: Number(value) });
    }
    if (name === "notes") {
      setTransaction({ notes: value });
    }

    console.log("Transaction: ", transaction);
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
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300, // 👈 add this
                      overflowY: "auto",
                    },
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

        {/* Debit Credi  */}
        {inputCred_Deb.map((item, index) => (
          <div key={index} className="flex-[1.5] flex flex-col gap-1">
            <Text
              text={item.text}
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            />
            <TextField
              name={item.name}
              value={item.value}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
              type="number"
              sx={{
                mb: 2,
                "& .MuiInputBase-root": { height: 40 },
                "& .MuiInputBase-input": { padding: "8px 12px" },
              }}
            />
          </div>
        ))}
      </div>

      {/* Description */}
      <TextField
        name="notes"
        value={formData.notes}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
        placeholder="Notes"
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
