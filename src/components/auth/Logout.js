import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import axios from "axios";

const Logout = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        try {
            await axios.post("https://localhost:5000/api/auth/logout", {}, { withCredentials: true });
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Logout
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to log out?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleLogout} color="secondary" autoFocus>Logout</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Logout;
