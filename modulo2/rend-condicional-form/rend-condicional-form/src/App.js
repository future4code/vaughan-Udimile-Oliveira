import './App.css';
import React from 'react';
import EtapaUm from './components/EtapaUm';
import EtapaDois from './components/EtapaDois';
import EtapaTres from './components/EtapaTres';
import Final from './components/Final';
import styled from 'styled-components';

const Container = styled.div`
text-align: center;
  display:flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 20px;
  }
`

export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  render() {
    const renderizarTela = () => {
      if(this.state.etapa === 1){
        return <EtapaUm/>
      } else if (this.state.etapa === 2){
        return <EtapaDois/>
      } else if (this.state.etapa === 3){
        return <EtapaTres/>
      } else if (this.state.etapa ===4){
        return <Final/>
      }
    }
    
    const botaoProximo = () => {

      return this.state.etapa === 1 || this.state.etapa === 2 || this.state.etapa === 3 ? <button onClick={() => proximaEtapa()}>Próxima Etapa</button> : ""
     
    }

    const proximaEtapa = () => {
        this.setState({etapa: this.state.etapa + 1 })
    } 

    
    return (
      <Container>
        {renderizarTela()}
        {botaoProximo()}
      </Container>
    );
  }
}

// export default App;
