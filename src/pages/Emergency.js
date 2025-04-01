import React from "react";
import { Container, Typography, Box, Button, Paper } from "@mui/material";

const Emergency = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Emergency Blood Requests
        </Typography>
        <Typography variant="h6" paragraph>
          Request blood urgently or find nearby donors.
        </Typography>
      </Box>
      <Paper sx={{ p: 4, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Recent Blood Requests:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>John Doe:</strong> Need O+ Blood - Urgent!
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Jane Smith:</strong> Need A- Blood - Urgent!
        </Typography>
      </Paper>
      <Button variant="contained" color="primary" fullWidth>
        Request Blood
      </Button>
    </Container>
  );
};

export default Emergency;
