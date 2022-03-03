import axios from 'axios'
import { urlBase } from '../constants/urlBase';
import { goToFeedPage } from "../Router/coordinator";


export const login = (body, clear, navigate, setRightButtonText) => {

    axios.post(`${urlBase}/users/login`, body)
        .then(res => {
            window.localStorage.setItem('token', res.data.token)
            clear()
            setRightButtonText("Logout")
            goToFeedPage(navigate)
        })
        .catch(err => alert(err.response.data.message))
}

export const signUp = (body, clear, navigate, setRightButtonText) => {

    axios.post(`${urlBase}/users/signup`, body)
        .then(res => {
            window.localStorage.setItem('token', res.data.token)
            clear()
            setRightButtonText("Logout")
            goToFeedPage(navigate)

        })
        .catch(err => alert(err.response.data.message))
}