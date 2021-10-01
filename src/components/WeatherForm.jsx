import logo from "../data/search.svg"
const WeatherForm = ({changeHandler,submitHandler ,inputCity}) => {
    
    return (  
        <form onSubmit={submitHandler} className="formContainer">
           
            <input type="text" onChange={changeHandler} value={inputCity} style={{color: "blue"}}/>
            <button type="submit"><img src={logo} alt="search"/></button>
        
        </form>
    );
}
 
export default WeatherForm;