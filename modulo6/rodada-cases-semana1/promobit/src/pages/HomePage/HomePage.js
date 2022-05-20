import React, { useState } from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';
import { api_key } from '../../constants/apiKEY';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../components/Header/Header';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function HomePage() {
    

    const [page, setPage] = useState(1)
    const [data, loading] = useRequestData({}, `${BASE_URL}popular?${api_key}&page=${page}` );

    console.log(`${BASE_URL}popular?${api_key}&page=${page}`)
    const moviesList = data.results && data.results.map(movie => {
        
            return (
               
                 <MovieCard key={movie.id} movie={movie}/>
                
            );
        });

        const handleChange = (event, value) => {
            setPage(value)
          }

    return (
        
    <div>
        <Header/>
    {moviesList}
    
    <Stack spacing={2}>
      <Pagination count={500} page={page} onChange={handleChange} sx={{ mb: '20px' }} />
    </Stack>

    </div>
    )
}