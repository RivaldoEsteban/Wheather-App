import React, { useState } from "react";
import styled from "styled-components";
import day from "./day";

const WeatherDataStyled = styled.div`
  position: absolute;
  bottom: -290px;
  height: 360px;
  width: 100%;
  background: var(--bg);
  color: var(--white);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 1.75rem 0 1rem;
  box-sizing: border-box;
  .component {
    bottom: 0;
  }
  * {
    margin: 0;
  }
  ::before {
    content: "";
    width: 4rem;
    height: 0.5rem;
    background: var(--white);
    border-radius: 0.25rem;
    position: absolute;
    right: calc(50% - 2rem);
    top: 0.5rem;
    cursor: pointer;
  }
  .weather-temperature {
    display: flex;
    gap: 1rem;
    overflow: auto;
    scroll-snap-type: x mandatory;
    padding: 0 1rem;
    margin: 2rem 0 1rem;
    box-sizing: border-box;
  }
  .weather-data {
    border: 3px solid transparent;
    scroll-snap-align: center;
    background: var(--black);
    padding: 1rem 12px;
    border-radius: 60px;
    width: 65px;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font: var(--body2-regular);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-sizing: border-box;
    height: 130px;
  }
  .weather-data.is-active {
    border: 3px solid var(--primary);
  }
  .weather-day-container {
    display: flex;
    gap: 1.5rem;
    padding: 0 1rem;
    justify-content: space-between;
  }
  .weather-day {
    font: var(--body1-bold);
    padding-bottom: 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
  }
  .weather-day.is-active {
    color: var(--primary);
    border-bottom: 4px solid var(--primary);
  }
  .weather-more-info {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .weather-more-info div p {
    color: var(--white);
    text-transform: capitalize;
    font: var(--body1-regular);
  }
  .weather-more-info div p b {
    color: var(--white);
    font: var(--body1-bold);
    text-transform: none;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .info b {
    padding-left: 5px;
  }
`;

function WeatherData({ weather, weatherForecast }) {
  const [hourlyWeather, setHourlyWeather] = useState([false, ""]);
  const tempMin = Math.floor(weather.main.temp_min - 273.15);
  const tempMax = Math.floor(weather.main.temp_max - 273.15);
  const humidity = weather.main.humidity;
  const windSpeed = (weather.wind.speed * 3.6).toFixed(2);
  // console.log(weatherForecast);
  const dia0 = weatherForecast.list.slice(0, 8);
  const dia1 = weatherForecast.list.slice(8, 16);
  const dia2 = weatherForecast.list.slice(16, 24);
  const dia3 = weatherForecast.list.slice(24, 32);
  const dia4 = weatherForecast.list.slice(32, 40);

  const [weatherPerDay, setWeatherPerDay] = useState(dia0);

  function handleClickComponent() {
    const weather = document.getElementById("Weather");
    weather.style.bottom = 0;
    // weather.classList.add("animate__backInUp");
  }

  function printDataByDate(number, dia) {
    setWeatherPerDay(dia);

    const todos = document.querySelectorAll(".weather-day");
    todos.forEach((tag) => {
      tag.classList.remove("is-active");
    });

    const element1 = document.getElementById(`element${number}`);
    element1.classList.add("is-active");
  }

  function weatherDataAccordingToTime(weather) {
    console.log(weather);
    const weatherItem = document.getElementById(weather.dt_txt);
    setHourlyWeather([true, weather]);
    if (weatherItem.classList.contains("is-active")) {
      weatherItem.classList.remove("is-active");
    } else {
      weatherItem.classList.add("is-active");
    }
  }

  return (
    <WeatherDataStyled onClick={handleClickComponent} id="Weather">
      <div className="weather-day-container">
        <h2
          className="weather-day"
          id="element0"
          onClick={() => {
            printDataByDate("0", dia0);
          }}
        >
          {day(0)}
        </h2>
        <h2
          className="weather-day"
          id="element1"
          onClick={() => {
            printDataByDate("1", dia1);
          }}
        >
          {day(1)}
        </h2>
        <h2
          className="weather-day"
          id="element2"
          onClick={() => {
            printDataByDate("2", dia2);
          }}
        >
          {day(2)}
        </h2>
        <h2
          className="weather-day"
          id="element3"
          onClick={() => {
            printDataByDate("3", dia3);
          }}
        >
          {day(3)}
        </h2>
        <h2
          className="weather-day"
          id="element4"
          onClick={() => {
            printDataByDate("4", dia4);
          }}
        >
          {day(4)}
        </h2>
      </div>
      <div className="weather-temperature">
        {weatherPerDay.map((weather) => {
          const degreesCelsius = Math.floor(weather.main.temp - 273.15);
          const weatherImage = weather.weather[0].main.toLowerCase();
          const date = new Date(weather.dt_txt);
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const currenthour = `${hours.toString().padStart(2, "00")}:${minutes
            .toString()
            .padStart(2, "00")}`;
          return (
            <div
              key={weather.dt_txt}
              className="weather-data"
              id={weather.dt_txt}
              onClick={() => {
                weatherDataAccordingToTime(weather);
              }}
            >
              <p>{currenthour}</p>
              <img
                src={`${process.env.PUBLIC_URL}/icons/${weatherImage}.svg`}
                alt=""
              />
              <p className="degrees-celsius">{degreesCelsius}°</p>
            </div>
          );
        })}
      </div>
      <div className="weather-more-info">
        <div className="info left">
          <p>
            máx:
            <b>
              {hourlyWeather[0]
                ? Math.floor(weather.main.temp_max - 273.15)
                : tempMax}
              °
            </b>
          </p>
          <p>
            viento:
            <b>
              {hourlyWeather[0]
                ? (weather.wind.speed * 3.6).toFixed(2)
                : windSpeed}
              Km-h
            </b>
          </p>
        </div>
        <div className="info right">
          <p>
            min:
            <b>
              {hourlyWeather[0]
                ? Math.floor(hourlyWeather[1].main.temp_min - 273.15)
                : tempMin}
              °
            </b>
          </p>
          <p>
            humedad:
            <b>{hourlyWeather[0] ? weather.main.humidity : humidity}%</b>
          </p>
        </div>
      </div>
    </WeatherDataStyled>
  );
}

export default WeatherData;
