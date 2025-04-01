import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" paragraph>
          We aim to connect blood donors with those in need through an easy-to-use platform.
        </Typography>
      </Box>
      <Typography variant="h5" gutterBottom>
        Key Features:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Location-based search for blood donors and banks" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Emergency request feature" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Track donation history" />
        </ListItem>
      </List>
    </Container>
  );
};

export default About;
