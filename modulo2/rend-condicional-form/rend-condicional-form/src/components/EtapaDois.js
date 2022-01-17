import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
 `

export default class EtapaDois extends React.Component {
    render() {
        return (
            <Container>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <input value={this.state.curso} onChange={this.escreveuNoInput}></input>
                <p>6. Qual a unidade de ensino?</p>
                <input></input>
            </Container>
        )
    }
}