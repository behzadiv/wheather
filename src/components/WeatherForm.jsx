import logo from "../data/search.svg"
const WeatherForm = ({changeHandler,submitHandler ,inputCity}) => {
    
    return (  
        <form onSubmit={submitHandler} className="formContainer">
           
            <input type="text" onChange={changeHandler} value={inputCity} style={{color: "blue"}}/>
            <button type="submit"></button>
        
        </form>
    );
}
 
export default WeatherForm;