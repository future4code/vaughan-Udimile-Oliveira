import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 10px
`

export default class Create extends React.Component {

    render() {
        return (
            <Container>
                <input
                    placeholder="Nome"
                    value={this.props.inputUser}
                    onChange={this.props.updateUser}
                />
                <input
                    placeholder="Email"
                    value={this.props.inputEmail}
                    onChange={this.props.updateEmail}
                />
                <br></br>
                <button onClick={this.props.createUser}>Criar Usuário</button>
                
                
            <button onClick={this.props.renderList}>Próxima</button>
            </Container>
        )
    }
}