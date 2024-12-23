//import React  from "react";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


 const Navbar = ({show}) => {
   
    return (

        <> 
        <div className= {show ? 'sidenav active' : 'sidenav'} >
        
         <img src= {logo} alt= "logo" className="logo" />
            
            <ul>
                <li> 
                <Link to="/home">  <FaHome />  Home</Link> 
                </li>
                   
            </ul>
            <ul>
                <li> 
                <Link to="/about"> <IoPerson />  About Me </Link> 
                </li>
            </ul>
           
        
        </div>

        </>
    );
}
   


export default Navbar;