"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ResponsiveDialogProps } from "@src/interfaces/dashboardInterfaces";

const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  handleClose,
  title,
  content,
  textCancel,
  textConfirm,
  icon: Icon,
  iconColor,
}) => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="flex items-center flex-row px-5">
          {Icon && <Icon color={iconColor} />}
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        </div>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {textCancel}
          </Button>
          <Button onClick={handleClose} autoFocus>
            {textConfirm}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ResponsiveDialog;
