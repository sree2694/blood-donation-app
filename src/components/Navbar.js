import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {["Home", "About", "Contact", "Emergency", "Profile"].map((text) => (
          <ListItem button component={Link} to={`/${text.toLowerCase()}`} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { sm: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            Blood Donation App
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {["Home", "About", "Contact", "Emergency", "Profile"].map((text) => (
              <Typography key={text} component={Link} to={`/${text.toLowerCase()}`} sx={{ color: "white", textDecoration: "none", mx: 2 }}>
                {text}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
