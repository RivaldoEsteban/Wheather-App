import React from "react";

function WeatherByHour({
  weather,
  setClassVar,
  classActive,
  setHourbyWeather,
}) {
  var es_safari = navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  var es_chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  var es_firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  let currenthour = "";
  if (es_safari) {
    currenthour = weather.dt_txt;
  }

  const degreesCelsius = Math.floor(weather.main.temp - 273.15);
  const weatherImage = weather.weather[0].main.toLowerCase();
  const date = new Date(weather.dt_txt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  currenthour = `${hours.toString().padStart(2, "00")}:${minutes
    .toString()
    .padStart(2, "00")}`;

  let amPm = "";
  if (es_chrome || es_firefox) {
    if (hours <= 12) {
      amPm = "am";
    } else {
      amPm = "pm";
    }
  }

  function handleClickTimeByHour() {
    setClassVar(weather.dt_txt);
    setHourbyWeather([true, weather]);
  }

  return (
    <div
      className={`weather-data ${classActive}`}
      onClick={handleClickTimeByHour}
      id={weather.dt_txt}
    >
      <div className="am-pm">
        <p>{currenthour} </p>
        <p>{amPm}</p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/icons/${weatherImage}.svg`} alt="" />
      <p className="degrees-celsius">{degreesCelsius}°</p>
    </div>
  );
}

export default WeatherByHour;
