import React from "react";
import styled from "styled-components";
import soleado from "./soleado.jpg";
import getWeather from "./services/weather";

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  border: 1px solid red;
  box-sizing: border-box;
  background-image: url(${soleado});
  background-position: center;
  background-size: cover;
  position: relative ;
  .current-date {
    display: flex;
    width: 14.68rem;
    height: 5.62rem;
    margin: auto;
    position: absolute;
    bottom: 1.25rem;
    background: linear-gradient(90deg, #536976 0%, #292E49 100%);
    color: var(--white);
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 1rem;
    border-radius: .5rem;
    left: calc(50% - (14.68rem/2) );
  }
  .current-date * {
    margin: 0;
  }
  .date {
    font: 400 normal 56px/43px 'Nunito', sans-serif;
  }
  .day{
    font: var(--caption-caption);
    margin-block-end: 0.75rem;
  }
  .location {
    font: var(--caption-caption);
  }
`;

function App() {
  // const date = new Date();
  // console.log(date.getDay());
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position);
    });
  } else {
    alert("el usuario no dio acceso a su ubicación");
  }
  return (
    <AppStyled>
      <div className="current-date">
        <div className="date">25</div>
        <div className="current-date-right">
          <p className="day">jueves,15 de julio</p>
          <div className="location">
            <img src="./icons/point.svg" alt="point"  aria-hidden='true'/>
            <p></p>
          </div>
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
