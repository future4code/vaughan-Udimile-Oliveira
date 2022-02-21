import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { urlBase } from "../constants/urlBase";
import axios from 'axios'


export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const postLogin = (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: password
        }
        axios.post(`${urlBase}/users/login`, body)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                navigate('/')
            })
            .catch(err => console.log(err.response))
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onClickSignUp = () => {
        navigate('/signup')
    }

    return (
        <div>
            <form onSubmit={postLogin}>
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
                <button>Entrar</button>
            </form>
            <button onClick={onClickSignUp}>Cadastrar-se</button>
        </div>
    )
}