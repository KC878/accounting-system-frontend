"use client";

import * as React from "react";
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
  return (
    <div>
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

            <div className="border border-gray-300 p-2">
              <TransactionLine />
            </div>
            {/* Buttons */}
            <div className="flex flex-row justify-between mt-5">
              <Button>
                <icon.add />
                <p>Add Line</p>
              </Button>
              <Button>Submit Transaction</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TransactionForm;
