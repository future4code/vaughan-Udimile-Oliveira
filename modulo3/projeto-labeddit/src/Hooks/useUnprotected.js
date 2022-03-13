import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { goToFeedPage} from "../Router/coordinator";

const useUnprotected = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token) {
           goToFeedPage(navigate)
        }
    }, [navigate])


}
 
export default useUnprotected 