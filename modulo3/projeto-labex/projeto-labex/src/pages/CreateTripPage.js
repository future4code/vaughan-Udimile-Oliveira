import { useState } from "react"
import { useProtect } from "../Hooks/useProtect"
import axios from "axios"
import { url_BASE } from "../constants/url"
import { useNavigate } from 'react-router-dom';

export default function CreateTripPage() {
    useProtect()

    const navigate = useNavigate()

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

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <div>
            <form onSubmit={onSubmitTrip}>
                <input
                    name="name"
                    type={""}
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Planeta"
                    name="planet"
                    type={""}
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
                    required
                />
                <input
                    placeholder="Descrição"
                    name="description"
                    type={""}
                    value={form.description}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Duração em dias"
                    name="durationInDays"
                    type={"number"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />
                <button>Criar</button>
            </form>
            <button onClick={() => handleClick()}>voltar</button>
        </div>
    )

}
