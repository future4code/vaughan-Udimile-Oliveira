import  { Axios } from "axios"
import {useEffect, useState} from "react  "

export function usePostData(url, body) {
    const [data, setData] = useState(undefined)
    
    useEffect(() => {
        Axios.post(url, body)
        .then(res => setData(res.data))
        .catch(err=> console.log(err.response.data))

    }, [url, body])

    return data
}