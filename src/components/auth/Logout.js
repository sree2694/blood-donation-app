import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true); // Open dialog on component load

  const handleClose = () => {
    setOpen(false);
    navigate(-1); // Go back to the previous page if canceled
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear authentication token
    navigate("/login"); // Redirect to login page
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Logout</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to log out?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogout} color="error">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Logout;
