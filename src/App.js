import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Api from './components/Api'
import GetApi from './components/GetApi'




function App() {
  
  return (
      <Router>
      <h4><Link to="/get">Click to Get</Link></h4>
      <h4><Link to="/post">Click to Post</Link></h4>
      <Route path='/post' exact ><Api/></Route>
      <Route path='/get' exact><GetApi/></Route>
      </Router>
     
  );
}


export default App;
