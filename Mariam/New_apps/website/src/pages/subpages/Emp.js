import { use, useState } from "react";
import Home from "../Home";
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap/Button';


export default function Emp (){

    const [empName, setEmpName] = useState('');
    const navigate = useNavigate ();
    const GoToHome = () => {
        navigate('/home');
    }

    return (
        <> 
        <button variant="primary" onClick={GoToHome} className="center-button " className = "center-button">  Back To Home page </button>
        <h1> قائمة الموظفين </h1>
        <form style={{direction: "rtl"}}> 
            <label> اسم الموظف</label>
            <input type="text" 
            value={empName}
            />

        </form>

        
        </>
        
    );
}