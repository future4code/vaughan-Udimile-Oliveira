import React from 'react'
import moment from "moment";
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/URL'
import { api_key } from '../../constants/apiKEY'

export default function DetailCard({ detail }) {

    const data = useRequestData({},`${BASE_URL}${detail.id}/credits?${api_key}` ) 

    console.log(data )

    const genres = detail.genres && detail.genres.map(genre => {
        return <p>{genre.name}</p>
    })

    return (
        <>
            {detail &&
                <div key={detail.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${detail.poster_path}`} alt={`Poster do ${detail.title}`} />
                    <h2>{detail.title}</h2>
                    <p>{moment.utc(detail.release_date).format('DD/MM/YYYY')}</p> <p>{genres}</p> <p>{detail.runtime} Minutos </p>
                    <h3>Sinopse</h3>
                    <p>{detail.overview}</p>
                </div>
            }
        </>
    )
}