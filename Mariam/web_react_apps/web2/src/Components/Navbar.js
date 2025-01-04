import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';  
import { IoPerson } from 'react-icons/io5'; 
import logo from './logo.png'; 
import { TiContacts } from "react-icons/ti";

const Navbar = ({ show }) => {
  return (
    <> 
      <div className={show ? 'sidenav active' : 'sidenav'}>
        <img src={logo} alt="logo" className="logo" />

        <ul>
          <li> 
           
            <Link to="/home"> <FaHome /> Home </Link> 
          </li>
        </ul>

        <ul>
          <li> 
           
            <Link to="/about"> <IoPerson /> About Me </Link> 
          </li>
        </ul>

        <ul>
          <li> 
           
            <Link to="/items"> <TiContacts /> Add Items  </Link> 
          </li>
        </ul>


      </div>
    </>
  );
};

export default Navbar;
