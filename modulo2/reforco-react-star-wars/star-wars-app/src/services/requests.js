import axios from "axios"
import { BASE_URL } from "../../constants/urls";




export const getCharacterList = (saveData) => {
    axios.get(`${BASE_URL}/people`)
        .then(response => {
            saveData(response.data.results )

        })
        .catch(err => {
            console.log(err.response)
        })
}

export const getCharacter = (url, saveData) => {
    axios.get(url)
        .then(
            response => {
                saveData(response.data)
            }
        )
        .catch(err => console.log(err.response))
}

export const getPlanet = (url, saveData) => {
    axios.get(url)
    .then(
        response => saveData(response.data.name )
    )
    .catch(
        err => console.log(err.response)
    )
}