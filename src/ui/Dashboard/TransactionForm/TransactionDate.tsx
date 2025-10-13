"use client";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import Text from "@src/components/Text";
import { useState } from "react";

const TransactionDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

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
          onChange={(newValue) => setSelectedDate(newValue)}
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
