import React ,{ useState , useEffect } from 'react'; 
import { DateTime } from 'luxon';





function SearchResults(props) {

    //if i want to destruct the object props right away use ({})

    const flightinfo = props.searchResults.map((flight) => {
    return <a >{props.departure}-{props.arrival}-{DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</a>
   });

   console.log(flightinfo);



//   useEffect(()=>{
//       showingdata();
//   }, [])



    return (
            <>

        <h1>List of Departures</h1>
        
      <div style={{ border:'1px solid black', borderRadius: '5px' , marginLeft :'10em', marginRight :'10em',backgroundColor: 'lightGrey' }} class= "result box"><>{flightinfo}</></div>
      </>
    )    
}
export default SearchResults;

function showdata(flight){
     return <a key={flight} ></a>
}



// {allCountries.map((c, i) => (
//     <Country country={c} key={i} />
//   ))}

