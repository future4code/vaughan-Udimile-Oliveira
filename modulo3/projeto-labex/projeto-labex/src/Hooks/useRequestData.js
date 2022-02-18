import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestData(url) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response)
                setIsLoading(false)
                setError(err)
            })

    }, [url])

    return [data, isLoading, error]
}