import React from "react";
import { useState } from 'react';

export default function Forms() {
    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
  
    return (
        <body> 
        <div className="div1">
          
            <form>
        <label>Enter your name:
          <input type="text"  value={name}  onChange={(e) => setName(e.target.value)}/>
        </label>
        <br /> 
        <label> Enter you email : </label>
        <br />    
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br /> 
            <button type="submit"> submit </button>
            </form>
            </div>
        </body>
        
   
    )
  }