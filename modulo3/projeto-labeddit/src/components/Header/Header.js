import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToFeedPage, goToLogin } from '../../Router/coordinator';
import { useNavigate } from 'react-router-dom';


export const Header = ({rightButtonText, setRightButtonText}) => {
  const navigate = useNavigate()
  const token = window.localStorage.getItem("token")


  const logout = () => {
    window.localStorage.removeItem("token")
  }

  const buttonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (

    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeedPage(navigate)} color="inherit"> Labeddit </Button>
        <Button onClick={buttonAction} color="inherit">{rightButtonText}</Button>
      </StyledToolbar>
    </AppBar>


  );
}