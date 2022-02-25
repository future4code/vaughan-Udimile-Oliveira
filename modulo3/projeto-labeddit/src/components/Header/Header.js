import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToFeedPage, goToLogin } from '../../Router/coordinator';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate()

  return (

    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeedPage(navigate)} color="inherit"> Labeddit </Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>


  );
}