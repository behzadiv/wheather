import { useEffect, useState } from "react";

import sunny from "../data/day.svg";
import cloudy from "../data/cloudy.svg";
import rainy from "../data/rainy.svg";
import snowy from "../data/snowy.svg";

const WeatherInfoBox = ({ state }) => {
  const [icon, setIcon] = useState(sunny);
  const [day, setDay] = useState("Day");
  useEffect(() => {
    if (state.name) {
      renderIcon(state);
      renderDay();
    }
  });
  const renderIcon = (state) => {
    //console.log(state.weather[0].main.toLowerCase());
    const weather = state.weather[0].main.toLowerCase();
    switch (weather) {
      case "clear":
        setIcon(sunny);
        break;
      case "clouds" || "haze":
        setIcon(cloudy);
        break;
      case "rainy":
        setIcon(rainy);
        break;
      case "snowy":
        setIcon(snowy);
        break;

      default:
        break;
    }
  };
  const renderDay = () => {
    const today = Date().toString().split(" ")[0];
    //console.log(today);
    setDay(today);
  };
  return (
    <section className="infoBox">
      <header>
        <h1>
          {state.name ? state.name : "city"}{" "}
          <span>{state.name ? state.main.temp : "0"}c</span>
        </h1>
        <h2>{day}</h2>
      </header>

      <main>
        <div className="information">
          <h5>Feels Like : {state.name ? <span>{state.main.feels_like} c</span> : <span>---</span>}</h5>
          <h5>Wind : {state.name ? <span>{state.wind.speed} km/h</span> : <span>---</span>}  </h5>
          <h5>Max-temp : {state.name ? <span>{state.main.temp_max} c</span> : <span>---</span>} </h5>
          <h5>Pressure : {state.name ? <span>{state.main.pressure}</span> : <span>---</span>} </h5>
          <h5>Humidity : {state.name ? <span>{state.main.humidity}</span> : <span>---</span>} </h5>
        </div>
        <div>
          <img src={icon}></img>
        </div>
      </main>
    </section>
  );
};

export default WeatherInfoBox;
