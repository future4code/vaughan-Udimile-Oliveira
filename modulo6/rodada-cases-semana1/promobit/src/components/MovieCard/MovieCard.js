import React from 'react'
import { goToDetails } from '../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function MovieCard({ movie }) {

    const navigate = useNavigate()

    return (
        <>
            {movie &&
                <div key={movie.id} onClick={() => goToDetails(navigate, movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`Poster do ${movie.title}`} />
                    <h2>{movie.title}</h2>
                </div>
            }
        </>
    )
}