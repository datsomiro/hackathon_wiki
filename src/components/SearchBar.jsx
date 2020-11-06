import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {

    const [searchResults, setsearchResults] = useState([]);

    useEffect(() => {
        getsearchresults()
    }, []);



    const getsearchresults = () => {
        setsearchResults();
    }


    return (
        <div>
            <div style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '10em', marginRight: '10em', backgroundColor: 'lightGrey' }} >Departure
            <br/>
                
                <form action=""><input type="checkbox" checked="direct" value="1"/> Direct flights only</form><br/>
                <button onClick={()=>props.setDeparture('PRG')}>Prague</button><br/>
                <button onClick={() => props.setDeparture('TXL')} >Berlin</button><br/>
                <button onClick={() => props.setDeparture('WAW')} >Warsaw</button><br/>
                <button onClick={() => props.setDeparture('PED')}>Pardubice</button><br/>
            </div>
            <div style={{ border: '1px solid black', borderRadius: '5px', marginLeft: '10em', marginRight: '10em', backgroundColor: 'lightGrey' }} >Arrivals<br/>
                <button onClick={() => props.setArrival('VLC')}>Valencia</button><br />
                <button onClick={() => props.setArrival('BSL')}>Basel</button><br/>
                <button onClick={() => props.setArrival('CDG')} >Paris</button><br/>
                <button onClick={() => props.setArrival('MAD')} >Madrid</button><br/>
                <button onClick={() => props.setArrival('FCO')}>Roma</button><br/>
            </div>
        </div>
        
    )
}

export default SearchBar;
