import axios from "axios"
import React from "react";
import Create from "./components/Create"
import Details from "./components/Details";
import List from "./components/List"
import styled from "styled-components";


const Container = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
`
const CardContainer = styled.div`
  border: 1px solid;
  justify-content: center;
  display: grid; 
  align-items: center;
  margin: 0;
  padding: 0;
`

export default class App extends React.Component {


  state = {
    showUsers: "createUser"
  };

  renderAll = () => {
    switch (this.state.showUsers) {
      case "createUser":

        return <Create
        renderList={this.renderList} />

      case "listUser":

        return <List
          renderCreate={this.renderCreate}
        />

      case "userDetails":
      
       return <Details
        renderList = {this.renderDetails}
       />

      default:
        break
    }
  }
  
 
  
  
  renderList = () => {
    this.setState({ showUsers: "listUser"})
  }
  renderCreate = () => {
    this.setState({ showUsers: "createUser" })
  }
  renderDetails = () => {
    this.setState({ showUsers: "userDetails" })
  };


 
  render() {
    return (


      <CardContainer>
        <Container>LabenUsers</Container>
        <this.renderAll />
      </CardContainer>

    );

  };
}
