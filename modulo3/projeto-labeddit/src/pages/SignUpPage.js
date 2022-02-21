import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { urlBase } from "../constants/urlBase";
import axios from 'axios'


export const SignUpPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()

    const postSignUp = (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: password,
            username: username
        }
        axios.post(`${urlBase}/users/signup`, body)
            .then(res => {
                // window.localStorage.setItem('token', res.data.token)
                console.log(res.data)
                navigate('/login')
            })
            .catch(err => console.log(err.response))
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    return (
        <div>
            <form onSubmit={postSignUp}>
            <input
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={onChangeUsername}
                    required
                />
                <input
                    placeholder="E-mail"
                    type={'email'}
                    value={email}
                    onChange={onChangeEmail}
                    required
                />
                <input
                    placeholder="Senha"
                    type={'password'}
                    value={password}
                    onChange={onChangePassword}
                    required
                />
               
                <button>Cadastrar</button>
            </form>
        </div>
    )
}