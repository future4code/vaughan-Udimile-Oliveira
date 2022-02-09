import axios from "axios"
import { BaseUrl } from "../constants/urls"

export const getProfileToChoose = () => {
    axios
        .get(`${BaseUrl}person`)
        .then(res => { })
        .catch(err => { err.response })
}

export const getMatches = () => {
    axios
        .get(`${BaseUrl}maches`)
        .then()
        .catch()
}

export const choosePerson = (body) => {
    axios
        .post(`${BaseUrl}choose-person`, body)
        .then()
        .catch()
}

export const getMatches = () => {
    axios
        .put(`${BaseUrl}clear`)
        .then()
        .catch()
}