"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Text from "@src/components/Text";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import ClickableIcon from "@src/components/ClickableIcon";
import { icon } from "@src/constants/icons";
import TransactionLine from "./TransactionLine";
import Description from "./Description";
import TransactionDate from "./TransactionDate";
import CreatedBy from "./CreatedBy";
import { ModalProps } from "@src/interfaces/interfaces";
import { useTransactionForm } from "@src/store/store";
import ResponsiveDialog from "@src/components/ResponsiveDialog";
import { getCookie } from "@src/utils/utils";
import { AxiosError } from "axios";

import { createTransaction } from "@src/services/userService";
import Notification from "@src/components/Notification";

import type { TransactionFormPost } from "@src/types/dashboardTypes";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh", // limit modal height to 80% of viewport
  overflowY: "auto", // make content scroll vertically
  borderRadius: 2,
  scrollbarWidth: "thin",
  scrollbarColor: "rgba(0,0,0,0.2) transparent",
};

const TransactionForm: React.FC<ModalProps> = ({
  open,
  setOpen,
  handleOpen,
  handleClose,
}) => {
  const [transactionLineIndex, setTransactionLineIndex] = useState(1);

  const [openResponsiveDialog, setOpenResponsiveDialog] = useState(false);

  const { transaction, transactionLine, updateTransactionLine, reset } =
    useTransactionForm();

  const [loading, setLoading] = useState<boolean>(false);

  const [notification, setNotification] = useState<{
    id: number;
    message: string;
    severity: "error" | "success";
  } | null>(null);

  let hasError = false; // error handler for transactionLines

  const handleCloseResponsiveDialog = () => {
    setOpenResponsiveDialog(false);
  };

  const handleConfirmTransaction = async () => {
    try {
      setLoading(true);

      if (!hasError) {
        const payload: TransactionFormPost = {
          created_by: transaction.created_by,
          transaction_date: transaction.transaction_date,
          description: transaction.description,
          transaction_lines: transactionLine,
        };

        const csrftoken = getCookie("csrftoken")!;
        const result = await createTransaction(csrftoken, payload);

        if (result.status === 201) {
          reset(); // reset the store data
          console.log("Transaction successfully created:", result);

          setNotification({
            id: Date.now(), // unique
            message: "Transaction Created Successfully!",
            severity: "success",
          });
          setTimeout(() => {
            setOpen(false); // close after delay
          }, 1000); // dealy 3 seconds to show notif
        }
      }
    } catch (err) {
      const axiosErr = err as AxiosError<any>;
      console.error("Transaction Error: ", axiosErr);
    } finally {
      setLoading(false); // always stop loading
      setOpenResponsiveDialog(false);
    }
  };

  const handleSubmit = () => {
    alert("submit");

    // assign error = true if there exist error for it
    for (let i = 0; i < transactionLine.length; i++) {
      const line = transactionLine[i];

      if (
        line.account_type === "" ||
        line.account_name === "" ||
        (line.debit_amount === null && line.credit_amount === null) ||
        (line.debit_amount === 0 && line.credit_amount === 0)
      ) {
        updateTransactionLine(i, { error: true });
        hasError = true;
      } else {
        updateTransactionLine(i, { error: false });
      }
    }

    if (!hasError) {
      setOpenResponsiveDialog(true);
    }
  };
  return (
    <div>
      {openResponsiveDialog && (
        <ResponsiveDialog
          loading={loading}
          handleClose={handleCloseResponsiveDialog}
          handleConfirm={handleConfirmTransaction}
          title={"Warning: Confirm Transaction"}
          content={`You are about to submit this transaction. Please review the transaction lines carefully before confirming. Once submitted, the transaction cannot be undone.`}
          textCancel={"Cancel"}
          textConfirm={"Confirm"}
          icon={icon.warning}
          iconColor={"warning"}
        />
      )}
      {notification && (
        <div>
          <Notification
            key={notification.id}
            message={notification.message}
            severity={notification.severity}
          />
        </div>
      )}

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          {/* <div className="flex justify-end"></div> */}

          <div className="overflow-auto">
            {/* Title */}
            <div className="flex justify-between items-center">
              <Text
                text={"Transaction Form"}
                sx={{ fontSize: "2rem", fontWeight: "bold", color: "#1a1a1a" }}
              />
              <ClickableIcon
                className={
                  "flex items-center justify-center h-[2rem] w-[2rem] hover:bg-gray-100"
                }
                icon={icon.close}
                functionClick={handleClose}
                functionType={"close-transaction-form"}
                color={"gray"}
                fontSize={30}
              />
            </div>

            {/* Horizontal Divider */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(128, 128, 128, 0.5)", // gray + semi-transparent
                marginTop: 15,
                marginBottom: 30,
              }}
            />

            {/* Transaction Date --> mke it a date picker -- by default set to today */}
            <div className="mt-2 flex flex-col gap-1">
              <TransactionDate />
            </div>

            {/* Created By */}
            <div className="flex flex-col gap-1">
              <CreatedBy />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1">
              <Description />
            </div>

            {/* Transaction Lines */}

            <TransactionLine index={transactionLineIndex} />

            {/* Buttons */}
            <div className="flex flex-row justify-between mt-5">
              <Button
                onClick={() => {
                  setTransactionLineIndex(transactionLineIndex + 1);
                }}
              >
                <icon.add />
                <p>Add Line</p>
              </Button>
              <Button onClick={handleSubmit}>Submit Transaction</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TransactionForm;
