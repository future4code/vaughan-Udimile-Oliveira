import axios from "axios"
import React from "react";
import styled from "styled-components"
import Create from "./components/Create"
import List from "./components/List"
import {Container} from "./style";

export default class App extends React.Component {


  state = {
    users: [],
    inputUser: "",
    inputEmail: "",
    showUsers: false
  };



  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputUser,
      email: this.state.inputEmail
    };
    const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

    axios.post(url, body, config)
      .then(response => {
        alert("Usuário criado com sucesso!")
        this.setState({ inputUser: "", inputEmail: "" })
        this.getAllUsers()
      })
      .catch(error => { alert(`Erro, algo de errado não está certo!`) })
  };

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

    axios.get(url, config)
      .then(response => {
        this.setState({ users: response.data})
        this.getAllUsers()
      })
      .catch(error => { alert(`Erro, algo de errado não está certo!`) })
  }

  deleteUsers = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

    axios.delete(url, config)
      .then(response => {alert("Usuário deletado com sucesso!")
    }
      )
      .catch(error => { alert(`Erro, algo de errado não está certo!`) })
  }

  updateUser = (event) => {
    this.setState({
      inputUser: event.target.value
    })
  };

  updateEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  };
  renderList = () => {
    this.setState({ showUsers: true })
  }
  renderCreate = () => {
    this.setState({ showUsers: false })
  }


  renderAll = () => {
    switch (this.state.showUsers) {
      case false:
        return <Create
          createUser={this.createUser}
          inputEmail={this.state.inputEmail}
          inputUser={this.state.inputUser}
          updateEmail={this.updateEmail}
          updateUser={this.updateUser}
          renderList={this.renderList} />
      case true:
        return <List
          getAllUsers={this.getAllUsers}
          deleteUsers={this.deleteUsers}
          users={this.state.users}
          renderCreate={this.renderCreate}
        />
      default:
        break

    }
  }

  render() {
    return (


      <Container>
        <h1>LabenUsers</h1>
        <this.renderAll />


      </Container>

    )

  }
}