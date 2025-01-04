export default function Items  (){

    return (
        <div> 
            <h2> ADD Items  </h2>
            <form> 
                <label> Add PC : </label>

                <select> 
                <option value="dell">  Dell PC </option>
                <option value="HP "> HP PC </option>
               </select>
                <br />
               <label> Employee Name : </label>
                <input type="text"
                    required
                />
              

               <label>  Note : </label>
               <br /> 

               <textarea> 
                
               </textarea>
               <br /> 
               <button> Add Item </button>
            </form>
        </div>
    )
}