import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm"
import WeatherInfoBox from "./WeatherInfoBox"
import axios from "axios"
import DarkMode from "./DarkMode"
import {toast} from "react-toastify"
const WeatherApp = () => {
    const[city,setCity]=useState("")
    const[inputCity,setInputCity]=useState("")
    const[state,setState]=useState("")
    useEffect(()=>{
        if(city){
            axios.get("https://api.openweathermap.org/data/2.5/weather?q="
            +city+
            ",IR&units=metric&APPID=b52163e6fd69267b9d58e13c0e215232"
            )
            .then((response)=>{
                setState(response.data)
            })
            .catch((error)=>
            {   
                if(!error.response){

                    toast.warning("check your connection ")
                    return;
                }
                if(error.response.status == 404)
                    
                toast.warning("Please Enter Iran's Cities")
                }
            )
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
            <div className="title">
                <h1>Weather App </h1>
                <DarkMode />
            </div>
            <WeatherForm changeHandler={cityHandler} submitHandler={searchCity} inputCity={inputCity} / >
            <WeatherInfoBox state={state}/>
        </div>
     );
}
 
export default WeatherApp;
