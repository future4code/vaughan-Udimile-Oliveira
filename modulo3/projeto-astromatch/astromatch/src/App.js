import { useEffect, useState } from "react";
import BarApp from "./components/BarApp";
import ResetMatch from "./components/ResetMatch";
import ChooseScreen from "./pages/ChooseScreen";
import MatchScreen from "./pages/MatchScreen";
import styled from "styled-components";
import '@fontsource/roboto/300.css'

const CardContainer = styled.div`
    border: 1px solid black;
    display: flex;
    width: 20%;
    flex-direction: column;
    border-radius: 5%;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    

    `
const Container = styled.div`
    display: grid;
    justify-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `

export default function App() {

  const [currentScreen, setCurrentScreen] = useState("choose")

  useEffect(() => { renderScreen() }, [])

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
    <Container>
      <CardContainer>
        <BarApp changeScreen={changeScreen} />
        {renderScreen()}

      </CardContainer>
      <ResetMatch />
    </Container>
  );
}


