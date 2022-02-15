import  { Axios } from "axios"
import {useEffect, useState} from "react  "

export function useRequestData(url) {
    const [data, setData] = useState(undefined)
    
    useEffect(() => {
        Axios.get(url)
        .then(res => setData(res.data))
        .catch(err=> console.log(err.response.data))

    }, [url])

    return data
}