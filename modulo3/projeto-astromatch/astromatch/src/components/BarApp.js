import styled from "styled-components"



const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    border-radius: 10%;

    button{
      margin: 5%;
    }

`

export default function BarApp(props) {

    return(
        <Container>
            <button onClick={() => props.changeScreen("matches")}>Matches</button>
            <button onClick={() =>props.changeScreen("choose")}>Escolher</button>
        </Container>
    )
}