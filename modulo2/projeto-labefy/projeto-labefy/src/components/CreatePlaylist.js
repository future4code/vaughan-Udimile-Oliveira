import React from "react";
import axios from "axios";

const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

export default class createPlaylist extends React.Component {
  state = {
    inputPlaylist: ""
  }


  createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = { name: this.state.inputPlaylist }


    axios.post(url, body, config)
      .then(response => {
        alert("Playlist cadastrada, agora adicione suas músicas")
        this.setState({ inputPlaylist: "" })

      })
      .catch(error => { alert(error.response.data.message) })
  }

  updatePlaylist = (event) => {
    this.setState({
      inputPlaylist: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Labefy</h1>
        <input
          placeholder="Nome da Playlist"
          value={this.state.inputPlaylist}
          onChange={this.updatePlaylist}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </div>
    )
  }
}