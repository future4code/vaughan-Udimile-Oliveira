import axios from "axios"
import { useEffect, useState } from "react"
import { BaseUrl } from "../constants/urls"
import styled from "styled-components"


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh;
    padding: 1vh;


    img{
        
        max-height:15%;
        min-width: 15%;
        
    }

`
const Button = styled.div`
        justify-content: space-between;
        display: flex;
`


export default function ChooseScreen() {

    const [profile, setProfile] = useState(undefined)


    useEffect(() => { getProfileToChoose() }, [])

    const getProfileToChoose = () => {
        axios
            .get(`${BaseUrl}person`)
            .then(res => {
                setProfile(res.data.profile)
              
            })
            .catch(err => { console.log(err.response) })
    }



    const choosePerson = () => {

        const body = {
            id: `${profile.id}`,
            choice: true
        }

        axios
            .post(`${BaseUrl}choose-person`, body)
            .then(res => getProfileToChoose())
            .catch(err => console.log(err.response))
    }



    return (
        <div>
            {profile ? (
                <CardContainer key={profile.id}>
                    <img src={profile.photo} alt={profile.name} />
                    <p>{profile.name}, {profile.age}</p>
                    <p>{profile.bio}</p>
                    <Button>
                        <button onClick={choosePerson}>Like</button>
                        <button onClick={getProfileToChoose}>X</button>
                    </Button>
                </CardContainer>) : (<p>Carregando...</p>)}
        </div>

    )
}