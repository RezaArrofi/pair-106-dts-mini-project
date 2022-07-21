import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const NavbarAll = () => {
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:"red"}}>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon /> */}
        {/* </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default NavbarAll;
