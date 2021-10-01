const WeatherForm = () => {
    const changeHandler =(e)=>{
        console.log(e.target.value);
    }
    return (  
        <div>
            <input type="text" onChange={changeHandler}/>
        </div>
    );
}
 
export default WeatherForm;