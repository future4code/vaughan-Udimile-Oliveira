import React from "react";
import styled from "styled-components";
import axios from "axios";
import PlaylistDetails from "./PlaylistDetails";

const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

export default class AllPlaylist extends React.Component {

    state = {

        playlist: [],
        page: "playlists",
        id: ""
    }

    componentDidMount = () => {
        this.getAllPlaylist()
    };

    getAllPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


        axios.get(url, config)
            .then(response => {

                this.setState({ playlist: response.data.result.list })

            })
            .catch(error => { alert(error.response.data.message) })
    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, config)
            .then(response => {
                window.confirm("Tem certeza que deseja deletar?")
                this.getAllPlaylist()
            })
            .catch(error => { alert(error.response.data.message) })
    }

    changePage = (id) => {
        switch (this.state.page) {
            case "playlist":
                return this.setState({ page: "playlistDetails", id: id })
            default:
                return this.setState({ page: "playlist", id: "" })
        }



    }

    render() {

        const playlistList = this.state.playlist.map((playlist) => {

            return (

                <div >

                    <button onClick={this.changePage}>{playlist.name}</button>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>Delete</button>

                </div>

            )
        }
        )
        return (
            <div>
                <h1>Playlists</h1>
                {playlistList}

                <PlaylistDetails id={this.state.id} />


            </div>
        )
    }
}