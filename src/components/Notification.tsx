import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { NotificationProp } from "@src/interfaces/interfaces";

const Notification: React.FC<NotificationProp> = ({ message, severity }) => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severity}
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
