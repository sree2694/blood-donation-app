import React from "react";
import { Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ListAltIcon from "@mui/icons-material/ListAlt";

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Blood Requests & Approvals */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">Manage Blood Requests</Typography>
              <Button variant="contained" startIcon={<ListAltIcon />} sx={{ mt: 2 }}>
                View Requests
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">Donor Approvals</Typography>
              <Button variant="contained" color="success" startIcon={<VerifiedIcon />} sx={{ mt: 2 }}>
                Approve Donors
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
