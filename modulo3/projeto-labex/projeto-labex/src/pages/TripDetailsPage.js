import { useRequestData } from "../Hooks/useRequestData"
import { url_BASE } from "../constants/url"
import axios from "axios"
import { useState, useEffect } from "react"
import { useProtect } from "../Hooks/useProtect"

export default function TripDetailsPage() {
    useProtect()
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        const token = localStorage.getItem(
            "token"
        )
        axios.get(`${url_BASE}trip/:id`, {
            headers: {
                auth: token
                
            }
        })
            .then(res => {
                setData(res.data)
                console.log(res.data)
                setIsLoading(false)

            })
            .catch(err => {
                console.log(err.response.data)
                setIsLoading(false)
                setError(err)
            })

    }, [])

    return (


        <div>
            <p>Oi</p>
        </div>

    )
}