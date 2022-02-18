import axios from "axios"
import { useEffect, useState } from "react"

export function usePostData(url, body) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.post(url, body)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err)
                setIsLoading(false)
            })

    }, [url, body])

    return [data, isLoading, error]
}