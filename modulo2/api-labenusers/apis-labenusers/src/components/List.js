import React from "react";
import styled from "styled-components";
import axios from "axios";
import Details from "./Details";


const Container = styled.div`
   display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
  padding-bottom: 30px;
  margin: 0;

button{
  border-radius: 8px;
  padding: 0.3em;
  border: 1px solid #CCC;
  font-weight: 500;
  
  }
  `
const Button = styled.button`
  border-radius: 8px;
padding: 0.3em;
border: 1px solid #CCC;
font-weight: 500;;
`

export default class List extends React.Component {

    state = {
        users: [],

    }

    componentDidMount = () => {
        this.getAllUsers()
    };

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

        axios.get(url, config)
            .then(response => {
                this.setState({ users: response.data })
                this.getAllUsers()
            })
            .catch(error => { alert(error.response.data.message) })
    }

    deleteUsers = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

        axios.delete(url, config)
            .then(response => {
                window.confirm("Tem certeza que deseja deletar?")
                this.getAllUsers()
            }
            )
            .catch(error => { alert(error.response.data.message) })
    }

    handleClick

    render() {

        const userList = this.props.users.map((user) => {
            return (
                
                    <Container>
                        <p>{user.name}</p>
                        <button onClick={this.props.renderDetails}>Ver detalhes</button>
                        <button onClick={() => this.deleteUsers(user.id)}>Deletar</button>
                    </Container>
            
            )
        }
        )
        return (
            <div>
                {userList}
                <Button onClick={this.props.renderCreate}>Cadastro</Button>
            </div>
        )
    }
}