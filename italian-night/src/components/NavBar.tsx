import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo or Brand Name */}
          <Typography variant="h6" component="div">
            Dinner Party
          </Typography>

          {/* Links for Desktop */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" sx={{ marginLeft: 2 }} href="#details">
              Details
            </Button>
            <Button color="inherit" sx={{ marginLeft: 2 }} href="#menu">
              Menu
            </Button>
            <Button color="inherit" sx={{ marginLeft: 2 }} href="#drinks">
              Drinks
            </Button>
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {/* Home List Item */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#details" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {/* Menu List Item */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#menu" onClick={toggleDrawer(false)}>
              <ListItemText primary="Menu" />
            </ListItemButton>
          </ListItem>

          {/* Drinks List Item */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#drinks" onClick={toggleDrawer(false)}>
              <ListItemText primary="Drinks" />
            </ListItemButton>
          </ListItem>

          {/* Contact List Item */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#contact" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
