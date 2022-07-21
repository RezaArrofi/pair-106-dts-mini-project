import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  Grid
} from "@mui/material";

import { 
  auth,
  register,
  login,
} from "../../authentication/firebase"; 

import { useAuthState } from "react-firebase-hooks/auth";

import { LockOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";


const LoginOrRegisterForm = ({loginOrRegister}) => {
  
  const navigate = useNavigate();
  
  const [user, loading, error]=useAuthState(auth);
  
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };
  

  const loginHandler = () => {
    login(credential.email, credential.password)
  };

  const registerHandler = () => {
    register(credential.email, credential.password)
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(
    ()=>{
      if(loading){
        return ;
      }
      if(user){
        navigate("/")
      }
    },[loading, user, navigate]
  );

  return(
    <>
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlined />
    </Avatar>
    <Typography component="h1" variant="h5">
    {loginOrRegister === "login" ? "Login Page" : "Register Page"}
    </Typography>
    <Box
      component="form"
      // noValidate
      // onSubmit={handleSubmit}
      sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          autoFocus
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>
        <Grid container>
          <Grid item xs>
          {loginOrRegister === "login" ? (
            <Link to="/register">
              <Typography variant="body1">or do you want Register ?</Typography>
            </Link>
          ) : (
            <Link to="/login">
              <Typography variant="body1">or do you want Login ?</Typography>
            </Link>
          )}
          </Grid>
        </Grid>
    </Box>
    </>
  );
};

export default LoginOrRegisterForm;