import React from "react";
import axios from "axios";

const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

export default class PlaylistDetails extends React.Component {

    state = {
        tracks: []
    }


    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, config)
            .then(response => {
                this.setState({ tracks: response.data.result.tracks })

            })
            .catch(error => { })
    }

    removeTrackFromPlaylist = ( trackId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${trackId}`

        axios.delete(url, config)
            .then(response => { })
            .catch(error => { })
    }

    updateTracks = (event) => {
        this.setState({
            tracks: event.target.value
        })
    }

    render() {
        const tracksList = this.state.tracks.map((track) => {
            return (
                <div>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <p>{track.url}</p>
                    <button onClick={() => this.removeTrackFromPlaylist(track.id)}>deletar</button>
                </div>
            )
        })
        return (

            <div>

            </div>
        )
    }
}