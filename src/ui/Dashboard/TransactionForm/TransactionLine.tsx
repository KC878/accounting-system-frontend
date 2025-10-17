"use client";

import React, { useEffect } from "react";
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
import { useTransactionForm } from "@src/store/store";

interface TransactionLineLocalProp {
  index: number; // number of lines to show
}

// study the logic, make sure to learn it
// fix why lag

const TransactionLine: React.FC<TransactionLineLocalProp> = ({ index }) => {
  const { transactionLine, setTransactionLine, updateTransactionLine } =
    useTransactionForm();

  // ✅ Generate the initial empty lines when index changes
  useEffect(() => {
    const initialLines = Array.from({ length: index }, (_, i) => ({
      id: i + 1,
      account_name: "",
      account_type: "",
      normal_balance: "",
      debit_amount: 0,
      credit_amount: 0,
      notes: "",
    }));

    setTransactionLine(initialLines);
  }, [index, setTransactionLine]);

  const accountValues = {
    assets: account.assets,
    equity: account.equity,
    liabilities: account.liabilities,
    revenue: account.revenue,
    expenses: account.expenses,
  };

  //  Handle Select Changes
  const handleSelectChange = (event: SelectChangeEvent, lineIndex: number) => {
    const { name, value } = event.target;

    if (name === "type") {
      const key = value as keyof typeof accountValues;

      updateTransactionLine(lineIndex, {
        account_type: key,
        account_name: "", // reset when changing type
        normal_balance: "",
      });
    }

    if (name === "account") {
      const currentType = transactionLine[lineIndex]
        .account_type as keyof typeof accountValues;
      const selectedAccount = accountValues[currentType]?.find(
        (acc) => acc.accountName === value
      );

      if (selectedAccount) {
        updateTransactionLine(lineIndex, {
          account_name: selectedAccount.accountName,
          normal_balance: selectedAccount.normalBalance,
        });
      }
    }
  };

  // 🧠 Handle Input Changes (Debit, Credit, Notes)
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    lineIndex: number
  ) => {
    const { name, value } = event.target;

    const parsedValue =
      name === "debit_amount" || name === "credit_amount"
        ? Number(value)
        : value;

    updateTransactionLine(lineIndex, {
      [name]: parsedValue,
    });
  };

  // ✅ Render each transaction line
  return (
    <>
      {transactionLine.map((line, i) => (
        <div
          key={line.id}
          className="border border-gray-300 rounded-xl p-4 my-4 bg-white shadow-sm"
        >
          {/* Header */}
          <div className="flex flex-row justify-between items-center mb-3">
            <Text
              text={`Transaction Line #${i + 1}`}
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#1a1a1a",
              }}
            />
            <FormControl fullWidth size="small" sx={{ width: 160 }}>
              <InputLabel id={`label-type-${i}`}>Type</InputLabel>
              <Select
                labelId={`label-type-${i}`}
                name="type"
                label="Type"
                value={line.account_type}
                onChange={(event) => handleSelectChange(event, i)}
              >
                <MenuItem value="assets">Assets</MenuItem>
                <MenuItem value="liabilities">Liabilities</MenuItem>
                <MenuItem value="equity">Equity</MenuItem>
                <MenuItem value="revenue">Revenue</MenuItem>
                <MenuItem value="expenses">Expenses</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Account, Debit, Credit */}
          <div className="flex flex-row gap-2">
            {/* Account */}
            <div className="flex flex-col gap-1 flex-[1.7]">
              <Text text="Account" sx={{ fontSize: "1rem", fontWeight: 600 }} />
              <FormControl fullWidth size="small">
                <Select
                  name="account"
                  value={line.account_name}
                  onChange={(event) => handleSelectChange(event, i)}
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    Select Account
                  </MenuItem>
                  {accountValues[
                    line.account_type as keyof typeof accountValues
                  ]?.map((item, index) => (
                    <MenuItem key={index} value={item.accountName}>
                      {item.accountName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* Debit */}
            <div className="flex flex-col gap-1 flex-1">
              <Text text="Debit" sx={{ fontSize: "1rem", fontWeight: 600 }} />
              <TextField
                size="small"
                name="debit_amount"
                value={line.debit_amount}
                onChange={(event) => handleInputChange(event, i)}
                variant="outlined"
                fullWidth
                type="number"
              />
            </div>

            {/* Credit */}
            <div className="flex flex-col gap-1 flex-1">
              <Text text="Credit" sx={{ fontSize: "1rem", fontWeight: 600 }} />
              <TextField
                size="small"
                name="credit_amount"
                value={line.credit_amount}
                onChange={(event) => handleInputChange(event, i)}
                variant="outlined"
                fullWidth
                type="number"
              />
            </div>
          </div>

          {/* Notes */}
          <TextField
            size="small"
            name="notes"
            value={line.notes}
            onChange={(event) => handleInputChange(event, i)}
            variant="outlined"
            fullWidth
            placeholder="Notes"
            sx={{ mt: 2 }}
          />
        </div>
      ))}
    </>
  );
};

export default TransactionLine;
