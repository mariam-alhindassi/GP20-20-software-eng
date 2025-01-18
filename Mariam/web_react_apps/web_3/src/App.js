
import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Showitems from "./pages/Showitems";
import Additems from "./pages/Additems";
import Dashbord from "./pages/Dashbord";
import { CiMenuBurger } from "react-icons/ci";
import Navbar from "./components/Navbar";
//import NoPage from "./pages/NoPage";


function App() {
 

  return (

    <>

    
      <div>
       
        <Navbar />
        {/* <Router>
          <header>
                
                   
                <Navbar />
                </header>
          <Routes > 
            <Route path="/" element = {<Home />} />
            <Route path="./dashbord" element = {<Dashbord />} />
            <Route path="./additems" element = {<Additems />} />
            <Route path="./showitems" element = {<Showitems />} />
          

          </Routes>

        </Router> */}
      </div>
    </>
  )
}

export default App;
