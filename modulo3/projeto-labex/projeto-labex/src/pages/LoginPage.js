import { url_BASE } from "../constants/url"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
        </div>


    )
}