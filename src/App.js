import React, {useState} from "react";
import styled from "styled-components";
import  CurrentDate from './components/current-date'
import soleado from "./soleado.jpg";
import getWeather from "./services/weather";

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${soleado});
  background-position: center;
  background-size: cover;
  position: relative ;
`;
const date = new Date();
const currentDay = date.getDay()
const currentDate = date.getDate()
const currentMonth = date.getMonth()
console.log(currentDate)
console.log(currentDay)//0-6 index
console.log(currentMonth) //0-11 index

function App() {
  const [country, setCountry] = useState('')
  const [degrees, setDegrees] = useState('')
  const [data, setData] = useState()

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position,setCountry,setDegrees,setData);
    });
  } else {
    alert("el usuario no dio acceso a su ubicación");
  }
  return (
    <AppStyled>
      {
        data ? <CurrentDate country={country} degrees={degrees}/> : "cargando"
      }
      <div className=''>
        <img src="images/parcial.jpg" width='500' height='500' alt="imagedd" />
      </div>
    </AppStyled>
  );
}

export default App;
