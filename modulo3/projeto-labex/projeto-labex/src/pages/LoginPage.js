import { url_BASE } from "../constants/url"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")

    const navigate = useNavigate()

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassWord(e.target.value)
    }
    const onClickLogin = (event) => {
      event.preventDefault()

       const body = {
        email: email,
        password: password
    }
    axios.post(`${url_BASE}login`
        , body)
        .then(res => {
          window.localStorage.setItem("token", res.data.token)
          navigate('/admin/trips/create', { state: true })
        })
        .catch(err => {
            console.log(err.response.data)
            
        })    
    }
    

    return (

        <div>
            <form onSubmit={() => onClickLogin()}>
            <label forHtml="email">E-mail</label>
            <input
                placeholder="E-mail"
                type={"email"}
                value={email}
                onChange={inputEmail}
            />
            <input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={inputPassword}
            />
            <button>Entrar</button>
            </form>        
        </div>


    )
}