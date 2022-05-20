import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/URL';
import { useParams } from "react-router-dom";
import { api_key } from "../../constants/apiKEY";
import Header from "../../components/Header/Header";
import DetailCard from "../../components/DetailCard/DetailCard";

const DetailPage = () => {
    const pathParams = useParams();
    const data = useRequestData([], `${BASE_URL}${pathParams.id}?${api_key}`)

 

    const movieDetails = data && data.map(detail => {  
        return (
            <DetailCard key={detail.id} detail={detail} />
        )
    }
    
    )

    return (
       
       <div>
            <Header/>
            {movieDetails}
       </div>
    );
};

export default DetailPage;