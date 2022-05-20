import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from '../../routes/Coordinator'

export default function Header(props) {
  const navigate = useNavigate()

  return (
    <div>
      <p onClick={() => navigate(goToHome)}>goToHome</p>
      <h1>TMDB</h1>
      
    </div>
  )
}