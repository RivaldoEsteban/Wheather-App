import React from "react";

function WeatherByHour({
  weather,
  setClassVar,
  handleClickTimeByHour,
  classActive,
  setHourbyWeather,
}) {
  const degreesCelsius = Math.floor(weather.main.temp - 273.15);
  const weatherImage = weather.weather[0].main.toLowerCase();
  const date = new Date(weather.dt_txt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currenthour = `${hours.toString().padStart(2, "00")}:${minutes
    .toString()
    .padStart(2, "00")}`;

  function handleClickTimeByHour() {
    setClassVar(weather.dt_txt);
    setHourbyWeather([true, weather]);
    console.log(weather);
  }

  return (
    <div
      className={`weather-data ${classActive}`}
      onClick={handleClickTimeByHour}
      id={weather.dt_txt}
    >
      <p>{currenthour}</p>
      <img src={`${process.env.PUBLIC_URL}/icons/${weatherImage}.svg`} alt="" />
      <p className="degrees-celsius">{degreesCelsius}°</p>
    </div>
  );
}

export default WeatherByHour;
