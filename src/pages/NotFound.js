import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="h6" paragraph>
          The page you are looking for doesn't exist.
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="body1" color="primary">
            Go Back to Home
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
