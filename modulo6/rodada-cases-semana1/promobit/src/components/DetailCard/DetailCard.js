import React from 'react'
import moment from "moment";
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import { api_key } from '../../constants/apiKEY'
import SuggestionCard from './SuggestionCard';

export default function DetailCard({ detail, id }) {

    const [data, loading] = useRequestData({}, `${BASE_URL}${id}/credits?${api_key}`)


    const genres = detail.genres && detail.genres.map(genre => {
        return <p>{genre.name}</p>
    })

    const cast = data.cast && data.cast.filter(
        acting => {
            return acting.order <= 10
        }).map(credit => {
            return (
                <div key={credit.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`} alt={`Foto do ${credit.name}`} />
                    <h3>{credit.name}</h3>
                    <p>{credit.character}</p>

                </div>
            )
        })

    const crews = data.crew && data.crew.filter(
        crew => {
            return crew.job === "Screenplay" || crew.job === "Director" || crew.job === "Characters"
        }
    ).map(crew => {
        return (
            <div key={crew.id}>
                <h5>{crew.name}</h5>
                <p>{crew.job}</p>
            </div>
        )
    })


    return (
        <div>
            {detail &&
                <div key={detail.id}>
                    <img src={`https://image.tmdb.org/t/p/w400${detail.poster_path}`} alt={`Poster do ${detail.title}`} />
                    <h2>{detail.title}</h2>
                    <p>{moment.utc(detail.release_date).format('DD/MM/YYYY')}</p><p>{genres}</p><p>{(detail.runtime / 60).toFixed()}h {detail.runtime % 60}m </p>
                    <h3>Sinopse</h3>
                    <p>{detail.overview}</p>
                    <div>{loading ? <p> Carregando...</p> : crews}</div>
                </div>
            }
            <div>{loading ? <p> Carregando...</p> : cast}</div>
            <div>
                <h3>Recomendações</h3>
                <SuggestionCard id={id} />
            </div>

        </div>

    )
}