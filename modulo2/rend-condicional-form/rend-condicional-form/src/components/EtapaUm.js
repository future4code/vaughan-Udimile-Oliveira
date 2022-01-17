import React from "react";
import styled from "styled-components";

const Container = styled.div`
text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
`

class EtapaUm extends React.Component {
    
    render() {
        return (
            <Container>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input value={this.state.nome} onChange={this.escreveuNoInput}></input>
                <p>2. Qual sua idade?</p>
                <input value={this.state.idade} onChange={this.escreveuNoInput}></input>
                <p>3. Qual seu email?</p>
                <input value={this.state.email} onChange={this.escreveuNoInput}></input>
                <p>4. Qual sua escolaridade?</p>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option></option>
                    <option value="ensino-medio-incompleto">Ensino Médio Incompleto</option>
                    <option value="ensino-medio-completo">Ensino Médio Completo</option>
                    <option value="ensino-superior-incompleto">Ensino Superior Incompleto</option>
                    <option value="ensino-superior-completo">Ensino Superior Completo</option>
                </select>
            </Container>
        )
    }
}

export default EtapaUm