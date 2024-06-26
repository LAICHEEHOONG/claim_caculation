import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { openAlert } from "../features/alert/alertSlice";

export default function AlertSnackbar() {
  const open = useSelector((state) => state.alert.alert);
  const message = useSelector((state) => state.alert.alertMessage);
  const dispatch = useDispatch();

  const setOpen = (boolean) => {
    dispatch(openAlert(boolean));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
}
