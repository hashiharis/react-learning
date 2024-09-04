import { useEffect, useState } from "react";
import "./search.css";
import { Weather } from "./Weather";
import { Map } from './Map';

export const Search = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    handleByCurrentLocation(unit);
  }, [unit]);

  const getByUserEnteredLocation = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c8ad3128f981928e8934de5e0264b44&units=${unit}`
      );
      if (!response.ok) {
        throw new Error("Weather data not available for this city");
      }
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      setError(error);
      alert(`Unable to retrieve weather data for ${city}, please try again!!!`)
    } finally {
      setLoading(false);
      console.log("API call finished!!!");
    }
  };

  const getByUserCurrentLocation = async (lat, lon, unit) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c8ad3128f981928e8934de5e0264b44&units=${unit}`
      );
      if (!response.ok) {
        throw new Error("Weather details for the current location not found");
      }
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      console.log("API call for fetching current location finished!!!");
    }
  };

  const getWeatherByUnitsCity = async (unit) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c8ad3128f981928e8934de5e0264b44&units=${unit}`
      );
      if (!response.ok) {
        throw new Error("Not applicable");
      }
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      setError(error);
    } finally {
      console.log("Weather unit updated!!!");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!city) {
      alert("Please enter a location");
      return;
    }
    getByUserEnteredLocation();
  };

  const handleByCurrentLocation = (unit) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if(!city){
            getByUserCurrentLocation(latitude, longitude, unit);
          }
         
        },
        () => {
          throw new Error(
            "Unable to retrieve weather data for the current location"
          );
        }
      );
    } else {
      setError("Geolocation not supported by the browser");
    }
  };

  const handleUnits = (e) => {
    const selectedUnit = e.target.value;
    setUnit(selectedUnit);
    if (city) {
      getWeatherByUnitsCity(selectedUnit);
      return
    } 
   
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSearch} className="form">
          <div className="form-img"></div>
          <input
            type="text"
            placeholder="Enter a location"
            value={city}
            onChange={(e) => setCity(e.target.value.toLowerCase())}
            className="form-input"
          />
          <button type="submit">Search by city</button>
          <select className="form-select" onChange={handleUnits}>
            <option defaultValue disabled>
              Select Unit
            </option>
            <option value="metric">Celsius</option>
            <option value="kelvin">Kelvin</option>
            <option value="imperial">Fahrenheit</option>
          </select>
        </form>
      </div>
      <div>
        {loading && <p>Loading weather details...</p>}
        {error && <p>Error:{error} </p>}
        {weather && <Weather weather={weather} units={unit} />}
        {weather && <Map weather={weather}/>}
      </div>
    </>
  );
};
