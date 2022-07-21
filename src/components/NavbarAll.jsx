import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import {
  logout
} from "../authentication/firebase";
import { useNavigate } from "react-router-dom";

const NavbarAll = () => {
  const navigate = useNavigate();
  
  const buttonLogoutHandler = async() => {
    await logout();
    navigate("/login");
  };
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:"red"}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={buttonLogoutHandler}
        >Logout</Button>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default NavbarAll;
