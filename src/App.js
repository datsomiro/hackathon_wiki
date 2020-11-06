import './App.css';
import Homepage from './Pages/Homepage';
import React, { useEffect, useState } from 'react';
import ResultPage from './Pages/ResultPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  
  function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:code" component={ResultPage} />

          </Switch>
        </div>
      </Router>
    )
  };

  export default App;

  
  


