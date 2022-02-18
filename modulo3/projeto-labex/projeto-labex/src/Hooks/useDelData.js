import { Axios } from "axios"
import { useEffect, useState } from "react"

export function useRequestData(url) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        Axios.delete(url)
            .then(res => {
                // setData(res.data)
                console.log(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data)
                setIsLoading(false)
                setError(err)
            })

    }, [url])

    return [data, isLoading, error]
}