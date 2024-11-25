import { useState}  from "react";


export default function Counter (){
    const [count, setCount] = useState(0);

    function Increament(){

        setCount(count+1);
    
    }
    function Decrement()
    {
        setCount(count-1);

    }

    return (
    
    <div> 
       <h1>count Value is : {count} </h1> 
       <button onClick={Increament}> Increment  </button>

       <button onClick={Decrement}> Decrement </button>
    </div>
    );

}