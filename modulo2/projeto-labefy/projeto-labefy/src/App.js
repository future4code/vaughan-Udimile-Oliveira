import React from "react";
import axios from "axios";
import CreatePlaylist from "./components/CreatePlaylist";
import AllPlayList from "./components/AllPlaylist";
import AddTracks from "./components/AddTracks";
import PlaylistDetails from "./components/PlaylistDetails";

const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

export default class App extends React.Component {

  state = {
    playlist: [],
    screen: "create",
    name: ""
  }

  

  renderScreen = () => {
    switch (this.state.screen) {
      case "create":
        return <createPlaylist/>
      case "playlists":
        return <AllPlayList/> 
      // case "playlistDetails":
      //   return  <PlaylistDetails/> 

    }
  }

  render() {

    return (

      <div>
        <CreatePlaylist />
        <AllPlayList />
        <br></br>
        <AddTracks />
      </div>
    )
  }
}