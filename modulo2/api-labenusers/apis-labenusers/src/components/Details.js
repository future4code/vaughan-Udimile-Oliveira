import axios from "axios"
import React from "react";
import styled from "styled-components";


const Button = styled.button`
  border-radius: 8px;
  padding: 0.3em;
  border: 1px solid #CCC;
  font-weight: 500;
`

export default class Details extends React.Component {

    state = {
        users: [],
        inputUser: "",
        inputEmail: "",

    }

    userDetails = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}"
        const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

        axios.get(url, config)
            .then(response => {
                this.setState({ users: response.data })

            })
            .catch(error => { alert(`Erro, algo de errado não está certo!`) })
    }

    editUserDetails = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}"
        const body = {
            name: this.state.inputUser,
            email: this.state.inputEmail
        };
        const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

        axios.put(url, body, config)
            .then(response => {
                this.setState({ users: response.data })
                this.getAllUsers()
            })
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
    }

    render() {
        const userList = this.props.users.map((user) => {
            return (

                <div>
                    <p>
                        {user.name}
                        {user.email}
                        {user.id}
                    </p>
                </div>
            )
        }
        )


        return (
            <div>
                {userList}
               
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
    
    
                    <Button onClick={this.props.renderList}>Retornar</Button>
                    </div>
            )
        

    }
}