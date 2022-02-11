import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import ResetMatch from "./components/ResetMatch";
import ChooseScreen from "./pages/ChooseScreen";
import MatchScreen from "./pages/MatchScreen";
import styled from "styled-components";

const CardContainer = styled.div`
    border: 1px solid black;
    display: flex;
    width: 20%;
    flex-direction: column;
    margin: 2vh;
    padding: 2vh;


    `

export default function App() {

  const [currentScreen, setCurrentScreen] = useState("choose")

  useEffect (() => {renderScreen()}, [])

  const renderScreen = () => {
    switch (currentScreen) {
      case "choose":
        return <ChooseScreen />
      case "matches":
        return <MatchScreen />
      default:
        return <ChooseScreen />

    }
  }

  const changeScreen = (param) => {
    setCurrentScreen(param)
    console.log(currentScreen)
  }

  return (
    <div>
      <CardContainer>
      <AppBar changeScreen={changeScreen} />
      {renderScreen()}
     
      </CardContainer>
      <ResetMatch />
    </div>
  );
}


