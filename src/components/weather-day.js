import React from "react";
import day from "./day";

function WeatherDay({ weatherForecast, setWeatherPerDay }) {
  // weatherForecast const que almacena la respuesta de la api de la funcion getWeatherForecastFor5Days
  // optenemos datos del clima de 5 dias futuros con lapsos de 3 horas , retorna un array  de 40 elementos , 8 por dia
  const dia0 = weatherForecast.list.slice(0, 3);
  const dia1 = weatherForecast.list.slice(3, 11);
  const dia2 = weatherForecast.list.slice(11, 19);
  const dia3 = weatherForecast.list.slice(19, 27);
  const dia4 = weatherForecast.list.slice(27, 35);

  // const todos = document.querySelectorAll(".weather-day");
  // todos.forEach((tag) => {
  //   tag.classList.remove("is-active");
  // });

  function printDataByDate0() {
    setWeatherPerDay(dia0);
  }
  function printDataByDate1() {
    setWeatherPerDay(dia1);
  }
  function printDataByDate2() {
    setWeatherPerDay(dia2);
  }
  function printDataByDate3() {
    setWeatherPerDay(dia3);
  }
  function printDataByDate4() {
    setWeatherPerDay(dia4);
  }
  console.log(day());
  return (
    <div className="weather-day-container">
      <h2
        className="weather-day is-active"
        id="element0"
        onClick={printDataByDate0}
      >
        {day(0)}
      </h2>
      <h2 className="weather-day" id="element1" onClick={printDataByDate1}>
        {day(1)}
      </h2>
      <h2 className="weather-day" id="element2" onClick={printDataByDate2}>
        {day(2)}
      </h2>
      <h2 className="weather-day" id="element3" onClick={printDataByDate3}>
        {day(3)}
      </h2>
      <h2 className="weather-day" id="element4" onClick={printDataByDate4}>
        {day(4)}
      </h2>
    </div>
  );
}

export default WeatherDay;
