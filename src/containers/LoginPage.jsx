import React from "react";
import ImgLogin from "../components/Login/ImgLogin";
import LoginOrRegisterForm from "../components/Login/LoginOrRegisterForm";
import CopyRigth from "../components/Login/CopyRigth";
import { ThemeProvider, createTheme, Grid, CssBaseline, Box, Paper } from "@mui/material";

const LoginPage = () => {
  const theme = createTheme();

  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "35vh", marginTop:0}}
      >
        <CssBaseline />
        <ImgLogin />
        <Grid 
          item xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box 
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LoginOrRegisterForm loginOrRegister={"login"}/>
          </Box>
          <CopyRigth />
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
};

export default LoginPage;