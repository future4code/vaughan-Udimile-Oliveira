import axios from "axios";
import React from "react";

const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

export default class AddTracks extends React.Component {
    state = {
        tracks: [],
        name: "",
        artist: "",
        url: ""

    }

    addTracksToPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(url, body, config)
            .than(response => {
                alert("Música adicionada com sucesso!")
                this.setState({ name: "", artist: "", url: "" })
            })
            .catch(error => { alert(error.response.data.message) })
    }

    inputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    inputArtist = (event) => {
        this.setState({
            artist: event.target.value
        })
    }

    inputUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Nome da Música"
                    value={this.state.name}
                    onChange={this.inputName}
                />
                <input
                    placeholder="Artista"
                    value={this.state.artist}
                    onChange={this.inputArtist}
                />
                <input
                    placeholder="link da música"
                    value={this.state.url}
                    onChange={this.inputUrl}
                />
                <button onClick={this.addTracksToPlaylist}>Adicionar Música</button>

            </div>
        )
    }
}



