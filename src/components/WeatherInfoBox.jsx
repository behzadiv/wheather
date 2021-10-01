import { useEffect, useState } from "react";

import sunny from "../data/day.svg"
import cloudy from "../data/cloudy.svg"
import rainy from "../data/rainy.svg"
import snowy from "../data/snowy.svg"

const WeatherInfoBox = ({ state }) => {
    const[icon,setIcon]=useState("")
    const[day,setDay]=useState("Day")
    useEffect(()=>{
        if(state.name){
        renderIcon(state)
        renderDay()
    }
    })
    const renderIcon=(state)=>{
        console.log(state.weather[0].main.toLowerCase());
        const weather = state.weather[0].main.toLowerCase();
        switch (weather) {
            case "clear":
                setIcon(sunny)
                break;
            case "clouds":
                setIcon(cloudy)
                break;
            case "rainy":
                setIcon(rainy)
                break;
            case "snowy":
                setIcon(snowy)
                break;
        
            default:
                break;
        }
    }
    const renderDay=()=>{
        const today = Date().toString().split(" ")[0]
        console.log(today);
        setDay(today)
    }
  return (
    <section>
        <header>
        <h1>
          {state.name ? state.name : "city"}{" "}
          <span>{state.name ? state.main.temp : "NAN"} c</span>
        </h1>
        <h1>{day}</h1>
        </header>
        <main>

      <div>
        <h5>Wind :{state.name ? state.wind.speed : "NAN"} km/h </h5>
        <h5>Min-temp : {state.name ? state.main.temp_min : "NAN"} c</h5>
        <h5>Max-temp : {state.name ? state.main.temp_max : "NAN"} c</h5>
        <h5>pressure : {state.name ? state.main.pressure : "NAN"} </h5>
        <h5>humidity : {state.name ? state.main.humidity : "NAN"} </h5>
      </div>
      <div>
      <img src={icon}></img>
      </div>
        </main>
    </section>
  );
};

export default WeatherInfoBox;
