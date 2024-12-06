

export default function Form2 ()
{
    return (
    <div className="container">
        <h1> Add contact Form </h1>
            <form>
            <label htmlFor="Fname" > First Name </label>
            <input type="text" placeholder="Fname"></input>

            <label htmlFor="Lname" > Last Name </label>
            <input type="text" placeholder="Lname"></input>

            <label htmlFor="email" > Enter you Email </label>
            <input type="text" placeholder="email"></input>

            <select name="departments" id="dep">
                <option name ="it"> IT Department</option>
                <option name ="media"> Media Department</option>
                <option name ="director"> Director office </option>
            </select>

            <button name="reset"> Reset </button>
            <button name="submit"> Submit </button>

            </form>
    </div>
    );
        
}
