import './App.css';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import WeatherApp from "./components/WeatherApp"
function App() {
  return (
    <div className="App">
      <WeatherApp/>
      <ToastContainer position="top-left" />
    </div>
  );
}

export default App;
