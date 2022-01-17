import React from "react";
import styled from "styled-components";


const Botao = styled.button`
display: flex;
flex-direction: column;
border: 1px solid clear;
&:hover {
    cursor: pointer;
}
`

class BotaoEnviar extends React.Component {

    onClickButton = () => {
        console.log("Clicou no botão")
    }

    render() {

        return (
            <div>

                <Botao onClick={this.onClickButton}>Enviar</Botao>

            </div>
        );
    };
};

export default BotaoEnviar;