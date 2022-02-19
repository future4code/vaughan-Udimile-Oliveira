import { url_BASE } from "../constants/url"
import axios from "axios"
import React, { useState, useMemo } from "react"
import { useRequestData } from "../Hooks/useRequestData"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useNavigate } from 'react-router-dom';

export default function AppFormPage() {
    const navigate = useNavigate()
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
    const handleClick = () => {
        navigate(-1)
    }

    const inputId = (e) => { setId(e.target.value) }
    const inputName = (e) => { setName(e.target.value) }
    const inputAge = (e) => { setAge(e.target.value) }
    const inputApplicationText = (e) => { setApplicationText(e.target.value) }
    const inputProfession = (e) => { setProfession(e.target.value) }
    const inputCountry = (e) => { setCountry(e.target.value) }

    return (

        <div>
            <form onSubmit={onSubmitApplication}>
                <select onChange={inputId} required>
                    <option value={""}>Nenhum</option>
                    {tripsSelect}
                </select>
                <input
                    placeholder={"Nome"}
                    value={name}
                    onChange={inputName}
                    required
                />
                <input
                    onChange={inputAge}
                    placeholder={"Idade"}
                    value={age}
                    required
                />
                <input
                    onChange={inputApplicationText}
                    placeholder={"Texto de Aplicação"}
                    value={applicationText}
                    required
                />
                <input
                    onChange={inputProfession}
                    placeholder={"Profissão"}
                    value={profession}
                    required
                />
                <Select
                    options={options}
                    value={country}
                    onChange={inputCountry}
                    required
                />
                <button>Enviar</button>
            </form>
            <button onClick={() => handleClick()}>Voltar</button>
        </div>

    )
}