import { useState } from "react"
import { useProtect } from "../Hooks/useProtect"
import axios from "axios"
import { url_BASE } from "../constants/url"
import styled from 'styled-components'
import Header from "../components/Header"


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
}
`

export default function CreateTripPage() {
    useProtect()

    const [form, setForm] = useState({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })

    }

    const onSubmitTrip = (event) => {

        event.preventDefault()

        const token = localStorage.getItem("token")

        const headers = {
            auth: token
        }
        axios.post(`${url_BASE}trips`, form, {headers})
            .then(res => { alert("Viagem cadastrada com sucesso!") })
            .catch(err => {
                console.log(err.response.data)
            })

    }


    return (
       <div>
           <Header/>
            <Container>
                <h2>Criar viagem</h2>
            <form onSubmit={onSubmitTrip}>
                <input
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{5,}"}
                    title={"O nome deve ter no mínimo 5 letras"}
                    required
                />
                <input
                    placeholder="Planeta"
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Data"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    min={"2022-02-20"}
                    required
                />
                <input
                    placeholder="Descrição"
                    name="description" 
                    value={form.description}
                    onChange={onChange}
                    pattern={"^.{30,}"}
                    title={"A descrição deve ter no mínimo 30 letras"}
                    required
                />
                <input
                    placeholder="Duração em dias"
                    name="durationInDays"
                    type={"number"}
                    value={form.durationInDays}
                    onChange={onChange}
                    min={50}
                    title={"A quantidade de dias mínima é 50 dias"}
                    required
                />
                <button>Criar</button>
            </form>

        </Container>
       </div>
    )

}
