import { url_BASE } from "../constants/url"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
    button{
        margin: 2px;
    }
}
`

export default function LoginPage() {

    const [form, setForm] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const onClickLogin = (event) => {

        event.preventDefault()

        axios.post(`${url_BASE}login`
            , form)
            .then(res => {
                window.localStorage.setItem("token", res.data.token)
                navigate('/admin/trips/list', { state: true })
            })
            .catch(err => {
                console.log(err.response.data)

            })

    }


    return (

        <div>
            <Header/>
            <Container>
            <form onSubmit={onClickLogin}>

                <input
                    name="email"
                    placeholder="E-mail"
                    type={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button type={"submit"} >Entrar</button>
            </form>
            </Container>
        </div>


    )
}