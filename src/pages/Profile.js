import React from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";

const Profile = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Your Profile
        </Typography>
        <Typography variant="h6" paragraph>
          Manage your profile and track your blood donation history.
        </Typography>
      </Box>
      <Paper sx={{ p: 4, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Personal Details:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Name:</strong> John Doe
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> john.doe@example.com
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Blood Type:</strong> O+
        </Typography>
      </Paper>
      <Button variant="contained" color="primary" fullWidth>
        Edit Profile
      </Button>
    </Container>
  );
};

export default Profile;
