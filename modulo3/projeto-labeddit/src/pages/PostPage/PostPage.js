import axios from "axios"
import { urlBase } from "../../constants/urlBase"
import  useProtect  from "../../Hooks/useProtect"


export const PostPage = () => {
    
    useProtect()

    const getPostComments = () => {

        const token = window.localStorage.getItem("token")

        const headers = {
            headers: {
                Authorization: token
            }
        }

        axios.get(`${urlBase}/posts/:id/comments`, headers)
        .then()
        .catch()
    }

    return(
        <div> </div>
    )
}