import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
           
        const Login = () => {
            const [isLoggedIn, setIsLoggedIn] = useState(false);
            useEffect (() => {
            setIsLoggedIn(true);

        }, []);
        
      if (isLoggedIn) {
        return <Navigate to ="/home" />;
      } else {
        return <div> {"please login again " } </div>
      }
    };

    export default Login ();


        // )
        // <>
        //     <div> 
        //         <form> 
        //             <label> user Name: </label>
        //             <input type="text" id="username"></input>
        //             <input type="password" id="password"></input>
        //             <button type="submit"> Sign In </button>
        //         </form>
        //     </div>
        // </>
       
//     )
// }