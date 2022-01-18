import React from "react";
import styled from "styled-components";



class InputUsuario extends React.Component {

    state = {
        nomeUsuario: ""
    }

    escreveuNoUsuario = (event) => {
        this.setState({nomeUsuario: event.target.value})
    }

    render() {
        const Input = styled.input`
        padding: 0.2em;
        border: 1px solid #CCC;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        grid-area: 10px;
        `;
        
        return (
            <div>
                <Input 
                value={this.state.nomeUsuario} 
                onChange={this.escreveuNoUsuario}
                placeholder="Usuário"
                />
            </div>
        );

    };

};

export default InputUsuario;