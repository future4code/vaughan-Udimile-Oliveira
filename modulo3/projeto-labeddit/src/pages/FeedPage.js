import axios from "axios"
import { useEffect, useState } from "react"
import { urlBase } from "../constants/urlBase"
import { useProtect } from "../Hooks/useProtect"

export const FeedPage = () => {
 
    useProtect()
 
    const [posts, setPosts] = useState({})
 
    const getPosts = () => {
        const token = window.localStorage.getItem("token")
    
        const headers = {
            headers: {
                Authorization:  token 
            }
        }
            axios.get(`${urlBase}/posts`, headers)
                .then(res => {
                    setPosts(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                })
    }

    useEffect(() => { getPosts() }, [])

    return (
        <div>
            <div>
                <p></p>
            </div>
            <div></div>
            <div>

            </div>

        </div>
    )
}