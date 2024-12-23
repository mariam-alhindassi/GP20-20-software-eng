
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import { CiMenuBurger } from "react-icons/ci";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";

  function App() {
    const [showNav, setShowNav] = useState(false)
  
  return (

  <>
 
    <Router> 
      <header>
      <h1> My Home Page Name  </h1>
        <CiMenuBurger onClick={() => setShowNav(! showNav)}
         />   
      </header>

      <Navbar show={showNav}>


        <div className="main">
       
        <switch> 
        <Route exact path ="/">
            <Home /> 
          </Route> 

          <Route exact path ="/about">
           <About /> 
          </Route> 
        </switch>
         
  
      
        </div>

      </Navbar>
    </Router>
    
  </>
      

    
);
  
}

export default App;
