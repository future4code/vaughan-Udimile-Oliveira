import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    justify-content: space-around;
    text-align: center;
    margin-top: 8%;
    button{
        margin: 5px;
    }

`

export default function HomePage() {

    const navigate = useNavigate()

    const handleClickList = () => {
        navigate("../trips/list", { state: true })
    }
    const handleClickAdmin = () => {
        navigate("../admin/trips/list", { state: true })
    }

    return (
        <div>
            <Header />
            <Container>
                <h2>Página Inicial</h2>
                <div>
                    <button onClick={() => handleClickList()}>Ver Viagens</button>
                    <button onClick={() => handleClickAdmin()}>Área Administrativa</button>
                </div>

            </Container>
        </div>
    )

}