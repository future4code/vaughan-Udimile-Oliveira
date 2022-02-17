import axios from "axios"
import {BaseUrl} from "../constants/urls"

export default function ResetMatch() {

   

    const clearMatches = () => {
        axios
            .put(`${BaseUrl}clear`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    }



    return (
        <div>
            <button onClick={clearMatches}>Limpar Match</button>
        </div>
    )

}