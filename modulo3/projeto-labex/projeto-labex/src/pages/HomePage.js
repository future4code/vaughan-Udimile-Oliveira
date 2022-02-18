import { useNavigate } from 'react-router-dom';
 
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
            <p>HomePage</p>
            <button onClick={() => handleClickList()}> ver viagem </button>
            <button onClick={() => handleClickAdmin()}> área admin </button>
        </div>
    )

}