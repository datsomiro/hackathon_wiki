import React, { useEffect, useState } from 'react';


const api = 'https://api.skypicker.com/flights?fly_from=JFK&fly_to=MCO';
const ResultPage = () => {
    const [detailFligth, setDetailFlight] = useState([])

    useEffect(() => {
       fetchingFlights()
    }, [])

    const fetchingFlights = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setDetailFlight(data.data)
        console.log(data)
    }

    return (
        {...detailFligth} 
        
        
    )
}

export default ResultPage;