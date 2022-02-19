import { Axios } from "axios"
import { useEffect} from "react"

export function useRequestData(url) {

    useEffect(() => {
       
        const token = localStorage.getItem("token")
        const headers = {
            auth: token
        }
        Axios.delete(url, {headers})
            .then(res => {
                // setData(res.data)
                console.log(res.data)
              
            })
            .catch(err => {
                console.log(err.response.data)
               
            })

    }, [url])


}