import React, { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import SearchResults from '../Components/SearchResults';

const api = 'https://api.skypicker.com/flights?partner=picky&fly_from=PRG&fly_to=VLC';



const Homepage = () => {
    const [allFlights, setAllFlights] = useState([])
    const [departure, setDeparture] =  useState('PRG')
    const [arrival, setArrival] = useState('VLC')
    const [direct, setDirect] = useState(1)
    
    const api = `https://api.skypicker.com/flights?partner=picky&fly_from=${departure}&fly_to=${arrival}&direct_flights=${direct}`;
    useEffect(() => {
        fetchingFlights()
    }, [departure, arrival,direct])

    const fetchingFlights = async () => {
        const response = await fetch(api)
        const data = await response.json()
        setAllFlights(data.data.slice(0, 5))

    }




    return (

        <div>
            <SearchBar setDeparture={setDeparture} setArrival={setArrival} setDirect={setDirect} direct={direct}/>
            { console.log(allFlights)}
            {/*//  {allFlights.length ? (
         //      allFlights.map((c, index) => (
         //          <Flights flight={c} key={index} />
         //      ))
         //  ) : (
         //          <span>Unavailable</span>
         //      )}*/}
            <SearchResults searchResults={allFlights}  departure={departure} arrival={arrival}/>
            
        </div>
    );
}

export default Homepage