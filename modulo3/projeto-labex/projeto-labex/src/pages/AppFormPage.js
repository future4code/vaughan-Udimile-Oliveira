import { url_BASE } from "../constants/url"
import axios from "axios"
import React, { useState, useMemo } from "react"
import { useRequestData } from "../Hooks/useRequestData"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Header from "../components/Header"
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    justify-content: space-around;
    margin-top: 5%;
    text-align: center;
form{
    display: flex;
    flex-direction: column;
    input{
        margin: 2px;
        width: 40vh;
    }
    button{
        margin: 2px;
    }
}
`


export default function AppFormPage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [id, setId] = useState("")

    const options = useMemo(() => countryList().getData(), [])



    const onSubmitApplication = (e) => {

        e.preventDefault()

        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        axios.post(`${url_BASE}trips/${id}/apply`, body)
            .then(res => {
                alert("Candidatura enviada com sucesso!")

            })
            .catch(err => {
                console.log(Error, err.response.data)

            })


    }
    const [trips] = useRequestData(`${url_BASE}trips`)
    const tripsSelect = trips && trips.trips.map(trip => {
        return (
            <option key={trip.id} value={trip.id}>
                {trip.name}
            </option>
        );
    })

    const inputId = (e) => { setId(e.target.value) }
    const inputName = (e) => { setName(e.target.value) }
    const inputAge = (e) => { setAge(e.target.value) }
    const inputApplicationText = (e) => { setApplicationText(e.target.value) }
    const inputProfession = (e) => { setProfession(e.target.value) }
    const inputCountry = (e) => {
    
        setCountry(e.value)
    }
    
    return (

        <div>
             <Header/>
             <Container>
                 <h2>Cadastre-se</h2>
            <form onSubmit={onSubmitApplication}>
                <select onChange={inputId} required>
                    <option value={""}>Nenhum</option>
                    {tripsSelect}
                </select>
                <input
                    placeholder={"Nome"}
                    value={name}
                    onChange={inputName}
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                    required
                />
                <input
                    onChange={inputAge}
                    placeholder={"Idade"}
                    value={age}
                    type="number"
                    min={18}
                    title={"A idade mínima é 18 anos"}
                    required
                />
                <input
                    onChange={inputApplicationText}
                    placeholder={"Texto de Aplicação"}
                    value={applicationText}
                    pattern={"^.{30,}"}
                    title={"A descrição deve ter no mínimo 30 letras"}
                    required
                />
                <input
                    onChange={inputProfession}
                    placeholder={"Profissão"}
                    value={profession}
                    pattern={"^.{10,}"}
                    title={"A profissão deve ter no mínimo 10 letras"}
                    required
                />
                <Select
                    options={options}
                    defaultValue={country}
                    onChange={inputCountry}
                    required
                />
                <button>Enviar</button>
            </form>
            </Container>
        
        </div>

    )
}