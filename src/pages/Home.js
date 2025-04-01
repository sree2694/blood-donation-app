import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to the Blood Donation App
        </Typography>
        <Typography variant="h6" paragraph>
          Connect with donors and request blood in emergencies. Join us in saving lives.
        </Typography>
        <Button component={Link} to="/emergency" variant="contained" color="primary">
          Request Blood
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
