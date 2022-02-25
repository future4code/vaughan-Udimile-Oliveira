import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { urlBase } from "../../constants/urlBase";
import axios from 'axios'
import Button from '@mui/material/Button'
import { goToFeedPage, goToSignUp } from "../../Router/coordinator";
import { StyledLogin } from "./styled";


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
                goToFeedPage(navigate)
            })
            .catch(err => alert(err.response.data))
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    

    return (
        <StyledLogin>
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
                <Button variant="contained" color={"primary"}>Entrar</Button>
            </form>
            <Button variant="contained" onClick={()=>goToSignUp(navigate)}>Cadastrar-se</Button>
        </StyledLogin>
    )
}