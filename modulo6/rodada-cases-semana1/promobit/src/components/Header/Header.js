import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from '../../routes/Coordinator'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { primaryColor } from "../../constants/colors";


export default function Header(props) {
  const navigate = useNavigate()

  return (
    
      <AppBar onClick={() => navigate(goToHome)} position="static">
        <Toolbar variant="dense" color="primaryColor" >
          <Typography variant="h4" component="div">
            TMDB
          </Typography>
        </Toolbar>
      </AppBar>

  )
}