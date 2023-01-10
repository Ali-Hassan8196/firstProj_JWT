import { useState, useEffect } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'bootstrap';
import employees from './employees';
import Task from './task1';
import Api from './api';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import Home from "./Home"
import JWT from './Jwt';
import Signin from './signin';
import Signup from './signup';
function App() {
  return (
    <div>


 

{/* <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
</Router> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<JWT/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router> */}
   
   <Router>
    <Routes>
     <Route  path="/" element={<Api/>}/> 
     <Route exact path="/Home" element={<Home/>}/>
    </Routes>
   </Router> 

    </div>
  );
}

export default App;
