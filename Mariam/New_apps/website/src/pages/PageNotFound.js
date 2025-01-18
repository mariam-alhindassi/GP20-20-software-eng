import React from "react";
//import  PageNot from './assets/images/PageNot.jpg';
import { useNavigate } from 'react-router-dom';


export default function PageNotFound () {
    const navigate = useNavigate ();
    const GoToHome = () => {
        navigate('/home');

    };
    return (
        <> 
           <div> 
           <img src="../images/PageNot.jpg" alt="Page Not Found"className="img"/>
           <button onClick={GoToHome} > Back To Home page </button>
           
        </div>
        </>
     

        
    )
}