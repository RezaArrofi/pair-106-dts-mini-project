import React from "react";
import { Typography, Link } from "@mui/material";

const CopyRigth = () => {
 return(
  <>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        PAIR 106 WEBSITE REA2A
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </>
 );
}

export default CopyRigth;