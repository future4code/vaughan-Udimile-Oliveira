import React from "react";

export default class Aoo extends React.Component{
  state = {
    playlist = ""
  }

  createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = this.state.playlist
    const config = {headers: {}}
  }

  render() {
    return(
      <div>
        oi
      </div>
    )
  }
}