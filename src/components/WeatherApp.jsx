import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm"
import WeatherInfoBox from "./WeatherInfoBox"
import axios from "axios"
const WeatherApp = () => {
    const[city,setCity]=useState("")
    const[inputCity,setInputCity]=useState("")
    const[state,setState]=useState("")
    useEffect(()=>{
        if(city){

            axios.get("http://api.openweathermap.org/data/2.5/weather?q="
            +city+
            ",IR&units=metric&APPID=b52163e6fd69267b9d58e13c0e215232"
                 )
            .then((response)=>{
                console.log(response.data);
                setState(response.data)
            })
            .catch((error)=>console.log(error))
        }
    },[city])
    const cityHandler =(e)=>{
        //console.log(e.target.value);
        setInputCity(e.target.value)
    }
    const searchCity=(e)=>{
        e.preventDefault();
        setCity(inputCity)
        setInputCity("")
    }

    return ( 
        <div>
            <h1>Weather App</h1>
            <WeatherForm changeHandler={cityHandler} submitHandler={searchCity} inputCity={inputCity} / >
            <WeatherInfoBox />
        </div>
     );
}
 
export default WeatherApp;