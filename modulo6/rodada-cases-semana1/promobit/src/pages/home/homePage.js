import React from 'react';
import { BASE_URL } from '../../constants/URL';
import useRequestData from '../../hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import { api_key } from '../../constants/apiKEY';

export default function HomePage() {
    

    const navigate = useNavigate()
    // const [data, loading] = useRequestData([], `${BASE_URL}?550${api_key}`);

   console.log(`${BASE_URL}?550${api_key}` 
    // const moviesList = data.results && data.results
    //     .map(movie => {
    //         return (
    //              <div key={movie.id}display={'none'} height={' 218px'} >
    //                  <div>{movie.id}</div>
    //              </div>
                
    //         );
    //     });

    return (
    <div>
       <h1>OI</h1>
    {/* {moviesList} */}
    </div>
    );
};