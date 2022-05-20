import { api_key } from "../../constants/apiKEY"
import { BASE_URL } from "../../constants/URL"
import useRequestData from "../../hooks/useRequestData"
import moment from "moment";
import { goToDetails } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function SuggestionCard({ id }) {
    const navigate = useNavigate()
    const [data, loading] = useRequestData({},`${BASE_URL}/${id}/similar?${api_key}`)

    const similar = data.results && data.results.map(movie => {
        return(
            <div key={movie.id} onClick={() => goToDetails(navigate, movie.id)}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`Poster do ${movie.title}`} />
                <h3>{movie.title}</h3>
                <p>{moment.utc(movie.release_date).format('DD MMM YYYY')}</p>
            </div>
        )
    })

    return(<>
    {loading ? <p>Carregando...</p> : similar}
    </>)
}