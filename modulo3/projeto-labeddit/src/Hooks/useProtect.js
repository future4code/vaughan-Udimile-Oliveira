import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { goToLogin } from "../Router/coordinator";

const useProtect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (!token) {
            goToLogin(navigate)
        }
    }, [navigate])


} 
export default useProtect