import { useEffect, useState } from "react";
import "./App.scss";
import Bottom from "./components/Bottom/Bottom";
import Mid from "./components/Mid/Mid";
import Top from "./components/Top/Top";
import axios from 'axios'

function App() {
const[weatherInput, setWeatherInput] = useState("Tashkent");
const [currentWeather, setCurrentWeather] = useState("");

const searchHandler = async () => {

  const {data} = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}&units=metric&appid=${Api}`
  )

  const {} = data;

  setCurrentWeather(data)

  
}

const Api = '7f5a6344fc693c991ef2528a28f7e1f1';

const inputHandler = (e) => {
  setWeatherInput(e.target.value)
}

useEffect(() => {
  searchHandler()
}, [])



  return <>
  <div className="app">
    <Top inputHandler={inputHandler} searchHandler={searchHandler}/>
    <Mid con={currentWeather && currentWeather?.weather[0]?.icon} temp={currentWeather?.main?.temp} city={currentWeather?.name}/>
    <Bottom wind={currentWeather?.wind?.speed} hum={currentWeather?.main?.humidity}/>
  </div>
  </>;
}

export default App;
