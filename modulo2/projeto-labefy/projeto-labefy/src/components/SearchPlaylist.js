import React from "react";
import axios from "axios";

const config = { headers: { Authorization: "Udimile-Oliveira-Vaughan" } }

export default class searchPlaylist extends React.Component {
    state = {
        name: ""
    }

    searchPlaylist = (name) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?${name}`
    
        axios.get(url, config)
          .then()
          .catch()
      }

    render() {
        return (
            <div>

            </div>
        )
    }
}