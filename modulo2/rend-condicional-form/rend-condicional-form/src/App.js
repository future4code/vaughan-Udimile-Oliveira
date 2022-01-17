// import './App.css';
import React from 'react';
import EtapaUm from './components/EtapaUm';
import EtapaDois from './components/EtapaDois';
import EtapaTres from './components/EtapaTres';
import Final from './components/Final';

export default class App extends React.Component {
  state = {
    etapa: 2
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
    return (
      <div >
       {renderizarTela()}
      <button>Proxima Etapa</button>
      </div>
    );
  }
}

// export default App;
