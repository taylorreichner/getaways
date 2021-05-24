import React, { useEffect, useState } from 'react';
import Place from '../../../bookings-api/lib/models/Place';
import { getPlaceById } from '../services/placesApi';

const DetailPage = ({match}) => {
    const [loading, setLoading] = useState(true);
    const [placeDetail, setPlaceDetail] = useState({});

    useEffect(() => {
        getPlaceById(match.params.id)
			.then(result => {
				setPlaceDetail(result)})
			.finally(() => setLoading(false))
      
    },[]);
   
    if (loading) return <h1>Loading...</h1>


    return (
        <div>
            <h1>Detail page</h1>
		
			 <p>{placeDetail.name}</p>
		    </div>
        
 )}
export default DetailPage;
