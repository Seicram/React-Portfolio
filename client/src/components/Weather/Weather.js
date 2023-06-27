import React, { useEffect, useState } from "react";
import axios from "axios"; //axios is used to make http requests to the server
import "../../index.css";

// wether app component that displays the weather for the city that is searched
const Weather = () => {
  const [searchQuery, setSearchQuery] = useState(""); // sets the search query to an empty string
  const [searchResults, setSearchResults] = useState([]); // sets the search results to an empty array
  const [selectedCity, setSelectedCity] = useState(null); // sets the selected city to null
  const [weatherData, setWeatherData] = useState(null); // sets the weather data to null
  const [forecastData, setForecastData] = useState(null); // sets the forecast data to null
  const [city, setCity] = useState(""); // sets the city to an empty string
  const [state, setState] = useState(""); // sets the state to an empty string

  // fetches the weather data and forecast data for the selected city
  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData(selectedCity); // fetches the weather data for the selected city
      fetchForecastData(selectedCity); // fetches the forecast data for the selected city
    }
  }, [selectedCity]); // only runs when the selected city changes

  // fetches the weather data and forecast data for the city
  const fetchWeatherData = async (city) => {
    try {
      const weatherApiKey = "986979ba094605639e44eaca0a6e1e44"; // Replace with your OpenWeatherMap API key
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`; // uses the openweathermap api to get the weather data for the city

      // Fetch weather data
      const weatherResponse = await axios.get(weatherApiUrl); // gets the weather data from the api
      setWeatherData(weatherResponse.data); // sets the weather data to the response data
      setCity(weatherResponse.data.name); // sets the city to the response data
      setState(weatherResponse.data.sys.country); // sets the state to the response data
    } catch (error) {
      console.error("Error fetching weather data:", error); // logs the error to the console
    }
  };

  // fetches the forecast data for the city
  const fetchForecastData = async (city) => {
    try {
      const forecastApiKey = "986979ba094605639e44eaca0a6e1e44"; // Replace with your OpenWeatherMap API key
      const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${forecastApiKey}`;

      const forecastResponse = await axios.get(forecastApiUrl); // gets the forecast data from the api
      setForecastData(forecastResponse.data); // sets the forecast data to the response data
    } catch (error) {
      console.error("Error fetching forecast data:", error); //  logs the error to the console
    }
  };

  // handles the search query change
  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        // If search query is empty, clear the search results
        setSearchResults([]); // sets the search results to an empty array
        return;
      }

      // Fetch search results from Zippopotam API
      const zipApiUrl = `https://api.zippopotam.us/us/${searchQuery}`;
      const zipResponse = await axios.get(zipApiUrl);
      const places = zipResponse.data.places;

      // If only one ZIP code found for the city name, fetch weather data directly
      if (places.length === 0) {
        // If no results found for the city name, fetch weather data directly
        fetchWeatherData(searchQuery);
        fetchForecastData(searchQuery);
      } else {
        // If multiple ZIP codes found for the city name, display the options
        setSearchResults(places);
      }
    } catch (error) {
      console.error("Error fetching search results:", error); // logs the error to the console
    }
  };

  // handles the selected city
  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setSearchResults([]);
  };

  // converts the temperature from celcius to fahrenheit
  const convertToFahrenheit = (temperature) => {
    return Math.round((temperature - 273.15) * (9 / 5) + 32);
  };

  // gets the day of the week
  const getDayOfWeek = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()] || "";
  };

  // gets the card color based on the weather
  const getCardColor = (weather) => {
    switch (weather) {
      case "Clear":
        return "#FFD700"; // Yellow
      case "Clouds":
        return "#808080"; // Gray
      case "Rain":
        return "#1E90FF"; // Blue
      case "Snow":
        return "#FFFFFF"; // White
      default:
        return "#FFFFFF"; // Default color
    }
  };

  // gets the weather icon based on the weather
  return (
    <div>
      <header>
        <h1>Weather Forecast</h1>
      </header>

      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter city or ZIP code"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchResults.length > 0 && (
        <div>
          <h2>Select a city:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li
                key={index}
                onClick={() => handleSelectCity(result["place name"])}
              >
                {result["place name"]}, {result.state}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/*displays the weather data and forecast data*/}
      {selectedCity && weatherData && forecastData && (
        <div id="weather-container">
          <div id="sameday" className="weather-card">
            <h2>
              City: {city}, {state}
            </h2>
            <h2>
              Current Temperature: {convertToFahrenheit(weatherData.main.temp)}
              °F
            </h2>
            <h2>Current Weather: {weatherData.weather[0].main}</h2>
            <h2>Current Humidity: {weatherData.main.humidity}%</h2>
          </div>

          <div id="forecast" className="weather-card">
            <h2>5-Day Forecast</h2>
            <div className="forecast-cards">
              {forecastData.list.slice(0, 5).map((forecast, index) => (
                <div
                  key={index}
                  className="forecast-card"
                  style={{
                    backgroundColor: getCardColor(forecast.weather[0].main),
                  }}
                >
                  <h3>{getDayOfWeek(new Date(forecast.dt_txt))}</h3>
                  <p>
                    Temperature: {convertToFahrenheit(forecast.main.temp)}°F
                  </p>
                  <p>Weather: {forecast.weather[0].main}</p>
                  <p>Humidity: {forecast.main.humidity}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
