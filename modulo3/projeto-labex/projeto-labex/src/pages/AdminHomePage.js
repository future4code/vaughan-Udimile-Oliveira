import { url_BASE } from "../constants/url"
import axios from "axios"
import { useProtect } from "../Hooks/useProtect"
import { useNavigate } from 'react-router-dom';


export default function AdminHomePage() {
    useProtect()

    const navigate = useNavigate()

    const handleCreateTrip = () => {
        navigate("/admin/trips/create", { state: true })
    }
    const handleClick = () => {
        navigate(-1)
    }

    return (

        <div>
            <button onClick={() => handleCreateTrip()}> Criar Viagem </button>
            <button onClick={() => handleClick()}> Voltar </button>
        </div>

    )
}