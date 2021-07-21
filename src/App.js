import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CurrentDate from "./components/current-date";
import WeatherData from "./components/weather-data";
import getWeather from "./services/weather";
import appBackgroundImage from "./components/app-background";
import getWeatherForecastFor5Days from "./services/forecast";
// import getWeatherForecastFor16Days from "./services/forecast-16-days"; no autorizado
// `${process.env.PUBLIC_URL}/icons/soleado.svg`;

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${process.env.PUBLIC_URL}/images/clear-day.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;
const date = new Date();
const currentDay = date.getDay();
const currentDate = date.getDate();
const currentMonth = date.getMonth();

// console.log(currentDate);
// console.log(currentDay); //0-6 index
// console.log(currentMonth); //0-11 index

function App() {
  const [weather, setWeather] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentHour, setCurrentHour] = useState(false);

  if (loading) {
    appBackgroundImage(weather, currentHour, setCurrentHour);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const weather = await getWeather(lat, lon);
        const weatherForecast = await getWeatherForecastFor5Days(lat, lon);
        setWeather(weather);
        setWeatherForecast(weatherForecast);
        setLoading(true);
      });
    } else {
      alert("el usuario no dio acceso a su ubicación");
    }
  }, []);

  return (
    <AppStyled id="app">
      {loading ? <CurrentDate weather={weather} /> : "cargando"}
      {loading ? (
        <WeatherData weather={weather} weatherForecast={weatherForecast} />
      ) : (
        ""
      )}
    </AppStyled>
  );
}

export default App;
