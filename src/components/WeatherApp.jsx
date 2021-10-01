import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm"
import WeatherInfoBox from "./WeatherInfoBox"
import axios from "axios"
const WeatherApp = () => {
    const[city,setCity]=useState("tehran")
    useEffect(()=>{
        axios.get("http://api.openweathermap.org/data/2.5/weather?q="
        +city+
        ",IR&units=metric&APPID=b52163e6fd69267b9d58e13c0e215232"
             )
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>console.log(error))
    },[])
    return ( 
        <div>
            <h1>Weather App</h1>
            <WeatherForm / >
            <WeatherInfoBox />
        </div>
     );
}
 
export default WeatherApp;