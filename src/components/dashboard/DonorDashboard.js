import React from "react";
import { Container, Typography, Paper, Grid, Card, CardContent, Button } from "@mui/material";

const DonorDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Donor Dashboard
      </Typography>
      
      {/* Donation History */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Donation History</Typography>
        <Typography>No donations recorded yet.</Typography>
      </Paper>

      {/* Eligibility & Blood Requests */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">Next Eligibility Date</Typography>
              <Typography color="textSecondary">May 15, 2025</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">Nearby Blood Requests</Typography>
              <Typography>No urgent requests at this time.</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                View Requests
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DonorDashboard;
