import React from "react";
import styled from "styled-components";
import axios from "axios";
import Details from "./Details";

const Container = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
  padding-bottom: 30px;
  margin: 0;


  input{
    padding: 0.2em;
  border: 1px solid #CCC;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  display: block;
  border-radius: 8px;
  } 
  button{
border-radius: 8px;
padding: 0.3em;
border: 1px solid #CCC;
font-weight: 500;
  }
`

export default class Create extends React.Component {

    state = {

        inputUser: "",
        inputEmail: "",

    }

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
            })
            .catch(error => { alert(error.response.data.message) })
    };

    updateUser = (event) => {
        this.setState({
            inputUser: event.target.value
        })
    };

    updateEmail = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
    }
    render() {
        return (
            <Container>
                <input
                    placeholder="Nome"
                    value={this.state.inputUser}
                    onChange={this.updateUser}
                />
                <input
                    placeholder="Email"
                    value={this.state.inputEmail}
                    onChange={this.updateEmail}
                />
                <br></br>
                <button onClick={this.createUser}>Criar Usuário</button>


                <button onClick={this.props.renderList}>Lista de usuários</button>
            </Container>
        )
    }
}
