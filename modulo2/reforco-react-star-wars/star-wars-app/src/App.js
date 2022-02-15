import React from 'react';
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';

export default class App extends React.Component {
  state = {
    currentScreen: "list",
    characterUrl: ""
  }

  goToDetailPage = (url) => {
    this.setState({currentScreen: "details", characterUrl: url})
  }

  goToListPage = () => {
    this.setState({currentScreen: "list", characterUrl: ""})
  }

  changeScreen = () => {
    switch (this.state.currentScreen){
      case "list":
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>
      case "details":
        return <CharacterDetailPage goToListPage={this.goToListPage} url={this.state.characterUrl}/>
      default:
        return <CharacterListPage goToDetailPage={this.goToDetailPage}/>

    }
  }
  render() {

    return (
      <div >
        {this.changeScreen()}
      </div>
    );
  }
}

