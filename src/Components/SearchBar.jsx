import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
    
    const [detailFlight, setDetailFlight] = useState([])

        useEffect(() => {
            props.match.params && props.match.params.code && fetchingFlights()
        }, [props.match.params.code])

        const fetchingFlights = async () => {
            const response = await fetch(api + props.match.params.code)
            const data = await response.json()
            setDetailFlight(data)
            console.log(data)
        };
    }

export default SearchBar;

