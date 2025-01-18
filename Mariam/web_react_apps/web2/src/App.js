
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiMenuBurger } from "react-icons/ci";
import About  from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
//import Contact from './Components/Pages/Items';
import Items from './Components/Pages/Items';


 function App() {

    const [showNav, setShowNav] = useState(true)
  
  return (

  
  <>
 
    <Router> 

    
      <header>
      <h2> My Home Page Name  </h2>
        <CiMenuBurger onClick={() => setShowNav(! showNav)}
         />   
      </header>

      <Navbar show={showNav} />


        <div className='main'>
       
          <Routes>
           
            <Route index='/' element={<Home />} /> 
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/items' element={<Items />} />

          </Routes>
         
        </div>
    
  
     </Router>  
 </>
      

    
);
  
};

export default App;
