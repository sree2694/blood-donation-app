import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: 4 }}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Blood Donation App</Typography>
            <Typography variant="body2">Connecting donors with those in need.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography variant="body2">Home | About | Contact | Emergency</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Email: support@blooddonation.com</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Blood Donation App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
