import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaSitemap } from "react-icons/fa";



export default function Navbar() {


    return (
      <> 

      {/* <div className={show ? 'sidenav active' : 'sidenav'}> */}
       
        <div> 
          <ul> 
          <li> 
            
            <Link to="/dashboard"> <RxDashboard /> Dashbord  </Link> 
          </li>
        </ul>

        <ul>
          <li> 
           
            <Link to="/home"> <FaHome /> /Home </Link> 
          </li>
        </ul>

        <ul>
          <li> 
           
            <Link to="/additems"> <RiComputerLine /> Add Items  </Link> 
          </li>
        </ul>

       
         

        <ul>
          <li> 
           
            <Link to="/showitems"> <FaSitemap /> Show items </Link> 
          </li>
        </ul>



      </div>
    </>
  )
    
}
