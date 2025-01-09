import { useState } from "react";
import {
  AppBar,
  Toolbar,
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
import { navButtons } from "../constants/constants";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

 
  return (
    <>
      {/* Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          background: "#1c1a1a", // Light grey with transparency
          backdropFilter: "blur(10px)", // Optional: Blurred effect for a modern look
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          width: "100%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}>
          {/* Brand Name */}

          {/* Links for Desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navButtons.map(item => (
                <Button key={item.id} color="inherit" sx={{ color: "white" }} href={item.href}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" }, color: "#333" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
         {navButtons.map(item => ( <ListItem key={item.id} disablePadding>
            <ListItemButton component="a" href={item.href} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
