import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import GetAllPlayList from "./components/GetAllPlaylist";

export default class App extends React.Component{
  
  state ={
    screen: "create"
  }

  // renderScreen = () => {
  //   switch (this.state.screen) {
  //     case "create":
  //       return <createPlaylist/>
  //     case "playlists":
  //       return <GetAllPlayList/> 

  //   }
  // }

  render() {
    return(
      <div>
       <CreatePlaylist/>
       <GetAllPlayList/>
      </div>
    )
  }
}