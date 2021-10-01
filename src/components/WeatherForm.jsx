import logo from "../data/search.svg"
const WeatherForm = ({changeHandler,submitHandler ,inputCity}) => {
    
    return (  
        <form onSubmit={submitHandler}>
            <div>
            <input type="text" onChange={changeHandler} value={inputCity}/>
            <button type="submit"><img src={logo} alt="search"/></button>
        </div>
        </form>
    );
}
 
export default WeatherForm;