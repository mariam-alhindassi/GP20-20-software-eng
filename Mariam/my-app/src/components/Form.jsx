import { useState } from "react";
import Items from "./Items";

export default function Form(){
    // const [name, setName]=useState({firsName :"", lastName:""});
    // const [items, itemsTodo] = useState("");
    const[todo, setTodo] = useState("");
    function addsubmit (e){
    e.preventDefault();
    
     

    }

    return (

        <div>
        <form onSubmit={addsubmit}>
            <label> First Name : </label>
            <br /> 
            <br />
            <input onChange ={(name) => setTodo({firsName:firsName.target.value})} type="text" value={todo.firsName}/>
            <br />
            <label> Last Name : </label>
            <br />
            <br />
            <input onChange ={(name) => setTodo({lastName.target.value})} type="text" value={todo.lastName}/>
            <br />
            <button onClick={(name)=> addsubmit(e)}> Add </button>

            </form>
            {name.map((item) => (
                <Item  />
            ))}
            </div>

        );
        

   
}