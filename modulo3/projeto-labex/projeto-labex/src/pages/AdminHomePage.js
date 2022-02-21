import { url_BASE } from "../constants/url"
import axios from "axios"
import { useProtect } from "../Hooks/useProtect"
import { useNavigate} from 'react-router-dom';
import { useRequestData } from "../Hooks/useRequestData";
import Header from "../components/Header";
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    justify-content: space-around;
    margin-top: 5%;
    text-align: center;


`

export default function AdminHomePage() {
    useProtect()

    const navigate = useNavigate()

    const handleCreateTrip = () => {
        navigate("/admin/trips/create", { state: true })
    }
    

    const [trips, isLoadingTrips, errorTrips] = useRequestData(`${url_BASE}trips`)

    const deleteTrip = (idTrips) => {

        const token = localStorage.getItem("token")
        const headers = {
            auth: token
        }
        axios.delete(`${url_BASE}trips/${idTrips}`, { headers })
            .then(res => {
                window.confirm("Quer mesmo apagar essa viagem?")

            })
            .catch(err => {
                console.log(err.response)

            })

    }


    const tripName = trips && trips.trips.map(trip => {
        const idTrips = trip.id
        return <div key={trip.id} value={trip.id}>

            <p>{trip.name}</p>
            <button onClick={() => handleClickDetails(idTrips)}>Detalhes</button>
            <button onClick={() => deleteTrip(idTrips)} >Deletar</button>
        </div>

    })

    const handleClickDetails = (idTrips) => {
        navigate(`/admin/trips/${idTrips}`, { state: true })
    }


    return (
        <div>
             <Header/>
             <Container>
            <div>
                <button onClick={() => handleCreateTrip()}> Criar Viagem </button>
            </div>
            <div >
                <h2>Lista das Viagens</h2>
                {isLoadingTrips && <p>carregando...</p>}
                {!isLoadingTrips && errorTrips && <p>Ocorreu um erro na requisição</p>}
                {!isLoadingTrips && trips && tripName}
                {!isLoadingTrips && trips && trips.length === 0 && <p>Não há dados na requisição!</p>}
            </div>
            </Container>
        </div>

    )
}