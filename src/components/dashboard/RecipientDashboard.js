import React from "react";
import { Container, Typography, Paper, Grid, Button, Card, CardContent } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const RecipientDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Recipient Dashboard
      </Typography>

      {/* Search Donors */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Search for Blood Donors</Typography>
        <Button variant="contained" startIcon={<SearchIcon />} sx={{ mt: 2 }}>
          Find Donors
        </Button>
      </Paper>

      {/* Blood Request Status */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">Your Blood Requests</Typography>
              <Typography>No active requests.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipientDashboard;
