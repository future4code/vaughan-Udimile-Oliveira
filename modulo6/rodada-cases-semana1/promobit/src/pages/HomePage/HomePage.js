import React from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';
import { api_key } from '../../constants/apiKEY';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../components/Header/Header';

export default function HomePage() {
    

    // const navigate = useNavigate()
    const [data, loading] = useRequestData({}, `${BASE_URL}popular?${api_key}&page=1` );

 
    const moviesList = data.results && data.results.map(movie => {
        
            return (
               
                 <MovieCard key={movie.id} movie={movie}/>
                
            );
        });

    

    return (
        
    <div>
        <Header/>
    {moviesList}
    
    </div>
    )
}