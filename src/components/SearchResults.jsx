import React ,{ useState , useEffect } from 'react'; 






function SearchResults(props) {

    //if i want to destruct the object props right away use ({})

    const flightinfo = props.searchResults.map((flight) => {
    return <a >{flight}</a>
   });

   console.log(flightinfo);



//   useEffect(()=>{
//       showingdata();
//   }, [])



    return (
            <>

        <h1>List of Departures</h1>
        
      <div style={{ border:'1px solid black', borderRadius: '5px' , marginLeft :'10em', marginRight :'10em' }} class= "result box">{flightinfo}</div>
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

