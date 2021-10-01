import WeatherForm from "./WeatherForm"
import WeatherInfoBox from "./WeatherInfoBox"
const WeatherApp = () => {
    return ( 
        <div>
            <h1>Weather App</h1>
            <WeatherForm / >
            <WeatherInfoBox />
        </div>
     );
}
 
export default WeatherApp;