import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
            <ul style={{ padding: 0, listStyleType: "none" }}>
              <li>
                <Link component={RouterLink} to="/" color="inherit" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/about" color="inherit" style={{ textDecoration: 'none' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/contact" color="inherit" style={{ textDecoration: 'none' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/emergency" color="inherit" style={{ textDecoration: 'none' }}>
                  Emergency Requests
                </Link>
              </li>
              <li>
                <Link component={RouterLink} to="/profile" color="inherit" style={{ textDecoration: 'none' }}>
                  Profile
                </Link>
              </li>
            </ul>
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
