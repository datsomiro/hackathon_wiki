import React, { useEffect, useState } from 'react';
import SearchBAr from '../Components/SearchBar';

const api = 'https://api.skypicker.com/flights?partner=picky&fly_from=JFK&fly_to=MCO';



const Homepage = () => {
    const [allFlights, setAllFlights] = useState([])

    useEffect(() => {
        fetchingFlights()
    }, [])

    const fetchingFlights = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setAllFlights(data.data.slice(0,5))
       
    }



    return (

        <div>
           { console.log(allFlights)}
         {/*//  {allFlights.length ? (
         //      allFlights.map((c, index) => (
         //          <Flights flight={c} key={index} />
         //      ))
         //  ) : (
         //          <span>Unavailable</span>
         //      )}*/}
         <p>hello</p>
        </div>
    );
}

export default Homepage