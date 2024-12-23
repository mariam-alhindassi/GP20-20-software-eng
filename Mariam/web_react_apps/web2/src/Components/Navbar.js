//import React  from "react";
import logo from '../images/logo.png'


 const Navbar = ({ show }) => {

    return (

        <div className={show ? 'sidenav active' : 'sidenav'}>

         <img src= {logo} alt= "logo" className="logo" />
            
            <ul>
                <li> 
                 <a href="/">  Home </a>
                </li>
            </ul>
            <ul>
                <li> 
                    <a href="/"> About me </a>
                </li>
            </ul>
            <ul>
                <li> 
                    <a href="/"> forms </a>
                </li>
            </ul>
        </div>
    )
}
   


export default Navbar