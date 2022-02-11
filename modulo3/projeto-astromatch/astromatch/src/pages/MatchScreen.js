import axios from "axios"
import { useEffect, useState } from "react"
import { BaseUrl } from "../constants/urls"
import styled from "styled-components"

const Imagem = styled.img`
    width: 10%;
`
const CardContainer = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    margin: 2%;
    padding: 2%;
    gap: 1%;
`

export default function MatchScreen() {

    const [matches, setMatches] = useState([])

    useEffect(() => { getMatches() }, [])

    const getMatches = () => {
        axios
            .get(`${BaseUrl}matches`)
            .then(res => {setMatches(res.data.matches)
        })
            .catch(err => console.log("erro", err.response))
    }

    return (
        <div >
            {matches.map(person => {
            
                return <CardContainer key={person.id}>
                    <Imagem src={person.photo} alt={person.name} />
                    <p>{person.name}</p>
                </CardContainer>
                
            })}
        </div>
    )
}