import React from "react";
import styled from "styled-components";




const Input = styled.input`
        padding: 0.2em;
        border: 1px solid #CCC;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        grid-area: auto;
        `;

class InputMensagem extends React.Component {
    state = {
        mensagem: ""
    }

    escreveuMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    render() {
        return (
            <div>
                <Input 
                value={this.state.mensagem} 
                onChange={this.escreveuMensagem}
                placeholder="Mensagem"
                />
            </div>
        );

    };

};

export default InputMensagem;