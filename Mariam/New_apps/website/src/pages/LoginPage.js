import React,  { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){

    const navigate = useNavigate()
    const  [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handelLogin =()=> {
        const validName = "Admin";
        const validPassword = '12345';
        
        if (username === validName && password === validPassword){
            navigate('/home')
        }
            
        else {
            setError('اسم المستخدم آو كلمة المرور غير صحيحة');
        }
        
    
    }


    return (
        <>
            <div className="Container" style={{direction :"rtl"}}> 
                <h1> تسجيل الدخول </h1>
                <br /> 
                <labe> اسم المستخدم </labe>
                <br />
                <input type="text" 
                placeholder="ادخل اسم المستخدم "
                value={username}
                onChange={(e) => setUserName(e.target.value)} /> 
                <br /> 
                <br />
               
                <input type="password" 
                placeholder="ادخل كلمة المرور "
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

                <br /> 
                <br />
                <button type="submit" onClick={handelLogin}> تسجيل دخول </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </>
    )
}