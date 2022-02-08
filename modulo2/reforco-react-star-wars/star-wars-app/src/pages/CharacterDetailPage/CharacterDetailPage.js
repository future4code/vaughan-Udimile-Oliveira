import axios from "axios";
import React from "react";
import { CardAll, CharacterCard } from "./styled";

export default class CharacterDetailPage extends React.Component {
    state = {
        character: {},
        planet: "",
    }

    componentDidMount() {
        this.getCharacter()

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.character !== prevState.character) {
            this.getPlanet()
        }
    }

    getCharacter = () => {
        axios.get(this.props.url)
            .then(
                response => {
                    this.setState({ character: response.data })
                }
            )
            .catch(err => console.log(err.response))
    }

    getPlanet = () => {
        axios.get(this.state.character.homeworld).then(
            response => this.setState({ planet: response.data.name })
        ).catch(
            err => console.log(err.response)
        )
    }

    render() {

        return (


            <CardAll>
                {this.state.character.name && this.state.planet ? (
                    <CharacterCard>
                        <p> Nome: {this.state.character.name} </p>
                        <p> Planeta Natal: {this.state.planet}</p>
                        <button onClick={this.props.goToListPage}>Voltar para Lista</button>
                    </CharacterCard>
                ) : <p>Carregando...</p>
                }

            </CardAll>
        )
    }
}