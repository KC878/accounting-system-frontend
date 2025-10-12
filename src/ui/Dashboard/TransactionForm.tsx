"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Text from "@src/components/Text";
import Modal from "@mui/material/Modal";
import { FormControl, Select, MenuItem } from "@mui/material";

import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh", // limit modal height to 80% of viewport
  overflowY: "auto", // make content scroll vertically
  borderRadius: 2,
  scrollbarWidth: "thin",
  scrollbarColor: "rgba(0,0,0,0.2) transparent",
};

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleOpen: () => void;
  handleClose: () => void;
}
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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="overflow-auto">
            {/* Title */}
            <div>
              <Text
                text={"Transaction Form"}
                sx={{ fontSize: "2rem", fontWeight: 400, color: "#1a1a1a" }}
              />
            </div>

            {/* Transaction Date */}
            <div>
              <Text
                text={"Recent Activity"}
                sx={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}
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

            {/* Created By */}
            <div>
              <Text
                text={"Recent Activity"}
                sx={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}
              />
              <FormControl fullWidth>
                <Select
                  value={"Default Value"}
                  //onChange
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <span style={{ color: "#aaa" }}>Select Gender</span>
                      );
                    }
                    return selected.charAt(0).toUpperCase() + selected.slice(1);
                  }}
                  sx={{
                    mb: 2,
                    "& .MuiInputBase-root": {
                      height: 40, // overall height of input
                    },
                    "& .MuiInputBase-input": {
                      padding: "8px 12px", // adjust text padding inside
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Description */}
            <div>
              <Text
                text={"Recent Activity"}
                sx={{ fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}
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

            {/* Transaction Lines */}
            <div>
              {/* Example if adding another */}
              <div className="flex flex-col">
                <div className="flex flex-row gap-4">
                  <div className="flex-2">
                    <Text
                      text={"Recent Activity"}
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
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

                  <div className="flex-[1.5]">
                    <Text
                      text={"Debit"}
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
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

                  <div className="flex-[1.5]">
                    <Text
                      text={"Credit"}
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
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
                  <Text
                    text={"Recent Activity"}
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 400,
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

                <div className="flex flex-row gap-4">
                  <div className="flex-2">
                    <Text
                      text={"Recent Activity"}
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
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

                  <div className="flex-[1.5]">
                    <Text
                      text={"Debit"}
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
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

                  <div className="flex-[1.5]">
                    <Text
                      text={"Credit"}
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
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
                  <Text
                    text={"Recent Activity"}
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 400,
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
            </div>

            {/* Extra */}

            <div className="flex flex-row justify-between">
              <Button> + Add line</Button>
              <Button> Submit Transaction</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TransactionForm;
