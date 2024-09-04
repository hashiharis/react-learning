import "./weather.css";
import { PiThermometerHotBold } from "react-icons/pi";
import { WiDirectionUp } from "react-icons/wi";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdSpeed } from "react-icons/md";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

export const Weather = ({ weather, units }) => {
  let weatherUnit = "";

  if (units === "metric") {
    weatherUnit = "°C";
  }
  if (units === "kelvin") {
    weatherUnit = "K";
  }
  if (units === "imperial") {
    weatherUnit = "°F";
  }

  let icon = "";

  let utcSunriseDate=new Date(
    (weather.sys.sunrise +weather.timezone) *1000
   ).toUTCString()

   let utcSunriseTime=new Date(utcSunriseDate).getUTCHours()+':'+new Date(utcSunriseDate).getUTCMinutes()+':'+new Date(utcSunriseDate).getUTCSeconds()

let utcSunsetDate=new Date((weather.sys.sunset+weather.timezone)*1000).toUTCString()
let utcSunsetTime=new Date(utcSunsetDate).getUTCHours()+':'+new Date(utcSunsetDate).getUTCMinutes()+':'+new Date(utcSunsetDate).getUTCSeconds()

  return (
    <div className={`weather-data ${weather.weather[0].main.toLowerCase()}`}>
      <h1>{weather.name}</h1>
       {/* to convert to seconds multiplied by 1000 because Javascript by default uses milliseconds, normal UNIX timestamps are in seconds */}
      <p>{new Date((weather.dt + weather.timezone) * 1000).toUTCString()}</p>
      <h2 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        ></img>
        {weather.main.temp}
        {weatherUnit}{" "}
      </h2>
      <div className="weather-measurements">
        <p>
          <PiThermometerHotBold />
          {weather.main.feels_like} {weatherUnit}
        </p>
        <p>Condition:{weather.weather[0].main}</p>
        <p>{weather.sys.country&& `Country: ${weather.sys.country}`}</p>
      </div>
      <div className="weather-metadata">
        <p>
          <FaArrowDown />
          {weather.main.temp_max}
          {weatherUnit}
        </p>
        <p>
          <FaArrowUp />
          {weather.main.temp_min}
          {weatherUnit}
        </p>
        <p style={{display:"flex", alignItems:"center"}}>
          <WiHumidity size="25px" />
          Humidity:{weather.main.humidity}
        </p>
        <p style={{display:"flex", alignItems:"center"}}>
          <MdSpeed size="20px" />
          Wind Speed:{weather.wind.speed}
        </p>
        <p>
          <FiSunrise />{" "}
          {utcSunriseTime}
        </p>
        <p>
          <FiSunset />
          {utcSunsetTime}
        </p>
      </div>
    </div>
  );
};
