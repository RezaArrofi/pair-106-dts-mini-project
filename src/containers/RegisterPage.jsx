import React from "react";
import LoginOrRegisterForm from "../components/Login/LoginOrRegisterForm";
import CopyRigth from "../components/Login/CopyRigth";
import ImgLogin from "../components/Login/ImgLogin";
import { ThemeProvider, createTheme, Grid, CssBaseline, Box, Paper } from "@mui/material";

const RegisterPage = () => {
  const theme=createTheme()
  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh'}}
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
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LoginOrRegisterForm loginOrRegister={"register"}/>
          </Box>
          <CopyRigth />
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}

export default RegisterPage;