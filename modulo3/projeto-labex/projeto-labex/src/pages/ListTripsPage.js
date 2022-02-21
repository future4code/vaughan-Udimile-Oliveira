import { useRequestData } from "../Hooks/useRequestData"
import { url_BASE } from "../constants/url"
import { useNavigate} from "react-router-dom"
import styled from 'styled-components'
import Header from "../components/Header"


const Container = styled.div`
    display: grid;
    justify-content: space-around;
    margin-top: 5%;
    text-align: center;
    `

export default function ListTripsPage() {

    const [trips, isLoadingTrips, errorTrips] = useRequestData(`${url_BASE}trips`)

    const tripsList = trips && trips.trips.map(trip => {

        return <div key={trip.id}>

            <h1>{trip.name}</h1>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Data: {trip.date} </p>
        </div>

    })
    const navigate = useNavigate()

    const handleClickSignUp = () => {
        navigate("../trips/application", { state: true })
    }


    return (
        <div>
            <Header/>
            <Container>
                <div>

                    <button onClick={() => { handleClickSignUp() }}>Inscrever-se</button>

                </div>
                <div>

                    {isLoadingTrips && <p>carregando...</p>}
                    {!isLoadingTrips && errorTrips && <p>Ocorreu um erro na requisição</p>}
                    {!isLoadingTrips && trips && tripsList}
                    {!isLoadingTrips && trips && trips.length === 0 && <p>Não há dados na requisição!</p>}

                </div>
            </Container>
        </div>

    )
}