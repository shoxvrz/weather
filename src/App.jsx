import { useEffect, useState } from "react";
import "./App.scss";
import Bottom from "./components/Bottom/Bottom";
import Mid from "./components/Mid/Mid";
import Top from "./components/Top/Top";
import axios from 'axios';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function App() {
  const [weatherInput, setWeatherInput] = useState("Tashkent");
  const [currentWeather, setCurrentWeather] = useState("");
  const [wIcon, setWIcon] = useState(null); // Change to null to indicate no icon

  const weatherIconMapping = {
    "01d": <CloudQueueIcon/>,
    "01n": <CloudQueueIcon/>,
    "02d": <CloudQueueIcon />,
    "02n": <CloudQueueIcon />,
    "03d": <CloudIcon />,
    "03n": <CloudIcon />,
    "04d": <CloudIcon />,
    "04n": <CloudIcon />,
    "09d": <WaterDropIcon />,
    "09n": <WaterDropIcon />,
    "10d": <WaterDropIcon />,
    "10n": <WaterDropIcon />,
    "11d": <ThunderstormIcon />,
    "11n": <ThunderstormIcon />,
    "13d": < AcUnitIcon/>,
    "13n": <AcUnitIcon />
  };

  const searchHandler = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&units=metric&appid=${Api}`
      );
      setCurrentWeather(data);
      const iconCode = data.weather[0].icon;
      setWIcon(weatherIconMapping[iconCode] || null); // Set the icon directly
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };



  const Api = '7f5a6344fc693c991ef2528a28f7e1f1';

  const inputHandler = (e) => {
    setWeatherInput(e.target.value)
  };

  useEffect(() => {
    searchHandler();
  }, []);

  return (
    <div className="app">
      <Top inputHandler={inputHandler} searchHandler={searchHandler}/>
      <Mid city={currentWeather?.name} temp={currentWeather?.main?.temp} icon={wIcon}/> {/* Pass the icon prop */}
      <Bottom wind={currentWeather?.wind?.speed} hum={currentWeather?.main?.humidity}/>
    </div>
  );
}

export default App;
