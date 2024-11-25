import { useState } from "react";

export default function Form(){
    const [name, setName]=useState({firsName :"", lastName:""});
    function addsubmit (e){
        e.preventDefault();
     

    }

    return (

        <div>
        <form onSubmit={addsubmit}>
            <label> First Name : </label>
            <br /> 
            <br />
            <input onChange ={(e) => setName({firsName:e.target.value})} type="text" value={name.firsName}/>
            <br />
            <label> Last Name : </label>
            <br />
            <br />
            <input onChange ={(e) => setName({lastName:e.target.value})} type="text" value={name.lastName}/>
            <br />
            <button onClick={(e)=> addsubmit(e)}> Add </button>

            </form>

        
            </div>

        );
        

   
}