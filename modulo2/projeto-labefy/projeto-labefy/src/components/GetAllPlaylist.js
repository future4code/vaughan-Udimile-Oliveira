import React from "react";
import axios from "axios";
import CreatePlaylist from "./CreatePlaylist";


export default class GetAllPlayList extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.getAllPlayList()
  }

  getAllPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const config = { headers: {Authorization: "Udimile-Oliveira-Vaughan"} }

    axios.get(url, config)
        .then(response => {
            this.setState({playlists: response.data.name})
            this.getAllPlayList()
        })
        .catch(err => {console.log(err.response)})

  }

  render(){
        const playlistList = this.state.playlists.map(playlist => {
            return (
                <div>
                    <>{playlist.name}</>
                </div>
            )
        })
      return (
        <div>
            <h1>Playlists</h1>
            {playlistList}
           
        </div>
      )
  }
}