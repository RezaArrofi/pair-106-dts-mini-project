import React from "react";
import { Grid } from "@mui/material";
const ImgLogin = () => {
  return(
    <Grid
      item
      xs = {false}
      sm = {4}
      md = {7}
      sx = {{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroudRepeat: 'no-repeat',
        backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition:'center'
      }}
    />
  )
}

export default ImgLogin;