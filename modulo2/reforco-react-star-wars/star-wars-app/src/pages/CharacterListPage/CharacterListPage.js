import React from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/urls";
import { CardAll, CharacterCard } from "./styled";

export default class CharacterListPage extends React.Component {
    state = {
        characterList: []
    }

    componentDidMount = () => {

        this.getCharacterList()
    }

    getCharacterList = () => {
        axios.get(`${BASE_URL}/people`)
            .then(response => {
                this.setState({ characterList: response.data.results })

            })
            .catch(err => {
                console.log(err.response)
            })
    }

    render() {
        const allCharacter = this.state.characterList.map(character => {
            return (
                <CharacterCard key={character.url}
                    onClick={() => this.props.goToDetailPage(character.url)}
                >
                    <p>{character.name}</p>
                    </CharacterCard>
            )
        })
        return (
            <CardAll>
                <h2>Personagens</h2>
                {allCharacter}
            </CardAll>
        )
    }
}