import Header from "../components/Header";
import { url_BASE } from "../constants/url"
import axios from "axios"
import { useState, useEffect } from "react"
import { useProtect } from "../Hooks/useProtect"
import { useParams} from "react-router-dom"
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    justify-content: space-around;
    margin-top: 3%;
    text-align: center;
    button{
        margin: 10px;
    }
`

export default function TripDetailsPage() {

    useProtect()
    const [tripDetail, setTripDetail] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [approve, setApprove] = useState(undefined)
    const { id } = useParams()

    useEffect(() => {

        setIsLoading(true)

        const token = localStorage.getItem(
            "token"
        )

        axios.get(`${url_BASE}trip/${id}`, {
            headers: {
                auth: token

            }
        })
            .then(res => {
                setTripDetail(res.data)
                setIsLoading(false)

            })
            .catch(err => {
                console.log(err.response)
                setIsLoading(false)
                setError(err)
            })
    }, [id])


    const putData = (candidateId) => {

        const token = localStorage.getItem(
            "token"
        )
        const body = {
            approve: approve
        }

        axios.put(`${url_BASE}trips/${id}/candidates/${candidateId}/decide`, body, {

            headers: {
                auth: token

            }
        })
            .then(res => {

                alert("Sucesso!")
                candidates()
                approvedList()

            })
            .catch(err => {
                alert(err.response)
            })
    }

    const handleClickApprove = (candidateId) => {
        setApprove(true)
        putData(candidateId)
    }
    const handleClickDontApprove = (candidateId) => {
        setApprove(false)
        putData(candidateId)
    }


    const candidates = tripDetail && tripDetail.trip.candidates.map(value => {
        const candidateId = value.id
        return <div key={value.id}>
            <h4>{value.name}</h4>
            <p>{value.age}</p>
            <p>{value.country}</p>
            <p>{value.applicationText}</p>
            <p>{value.profession}</p>
            <button onClick={() => handleClickApprove(candidateId)}>Aceitar</button>
            <button onClick={() => handleClickDontApprove(candidateId)}>Declinar</button>
        </div>
    })
    const approvedList = tripDetail && tripDetail.trip.approved.map(value => {

        return <div key={value.id}>
            <h4>{value.name}</h4>
            <p>{value.age}</p>
            <p>{value.country}</p>
            <p>{value.applicationText}</p>
            <p>{value.profession}</p>

        </div>
    })

    return (

        <div>
        <Header/>
            <Container>

                {isLoading && <p>carregando...</p>}
                {!isLoading && error && <p>Ocorreu um erro na requisição</p>}
                {!isLoading && tripDetail &&
                    <div>
                        <h2>{tripDetail.trip.name}</h2>
                        <p>Descrição:{tripDetail.trip.description}</p>
                        <p>Data:{tripDetail.trip.date}</p>
                        <p>Planeta:{tripDetail.trip.planet}</p>
                        <p>Duração:{tripDetail.trip.durationInDays}</p>
                        <div>
                            <h3>Candidatos</h3>
                            {candidates}
                        </div>
                        <div>
                            <h3>Aprovados</h3>
                            {approvedList}
                        </div>
                    </div>

                }
                {!isLoading && tripDetail && tripDetail.length === 0 && <p>Não há dados na requisição!</p>}

            </Container>
        </div>

    )
}