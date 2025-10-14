"use client";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import Text from "@src/components/Text";
import { useState } from "react";
import { mysqlDate } from "@src/utils/utils";

// main holder of data to be passed on api
import { useTransactionForm } from "@src/store/store";

const TransactionDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const { setTransaction } = useTransactionForm();

  // handle the logic here
  const handleChange = (transactionDate: string) => {
    setTransaction({ transaction_date: transactionDate });

    // Access latest value immediately after updating:
    const newState = useTransactionForm.getState();
    console.log("Updated TransactionDate:", newState.transaction);
  };
  return (
    <>
      <Text
        text={"Transaction Date"}
        sx={{
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#1a1a1a",
        }}
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
            if (newValue) {
              const transactionDate = mysqlDate(newValue);
              handleChange(transactionDate); // pass the formatted value
            }
          }}
          slotProps={{
            textField: {
              required: true,
              fullWidth: true,
              sx: {
                mb: 2,
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default TransactionDate;
