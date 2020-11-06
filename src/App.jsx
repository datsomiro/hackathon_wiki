
import React ,{ useState , useEffect } from 'react'; 
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';


var thingsarray = [ "cat" , "bat" , "trinidad" , "boat" ] ; 

function App() {

  const [ searchResults, setsearchResults ] = useState([]);

  useEffect (()=>{
    getsearchresults() 
  },[]);
  
 

  const getsearchresults = () => {
       setsearchResults(  thingsarray  );
      }
  
  

  return (
    <div className="App">
      <SearchBar  />

      <SearchResults 
      searchResults ={searchResults}
      
      />
      </div>
  );
}

export default App;
