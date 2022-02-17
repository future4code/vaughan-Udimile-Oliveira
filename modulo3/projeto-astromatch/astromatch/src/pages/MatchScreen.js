import axios from "axios"
import { useEffect, useState } from "react"
import { BaseUrl } from "../constants/urls"
import styled from "styled-components"

const Imagem = styled.img`
    max-width: 20%;
    max-height: 40px;
    display: inline-table;
`
const CardContainer = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    gap: 1%;
    min-width: 50%;
    align-items: center;
    
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