async function getWeather(position,setCountry,setDegrees,setData) {
  const lat = await position.coords.latitude;
  const lon = await position.coords.longitude;
  const key = "091ec36883705339db6f4e5fbef580dc";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}` //datos meteorologicos actuales segun la ubicacion
  );

  if(response.ok == true) {
    const data = await response.json();
    const grados =  Math.floor(data.main.temp -  273.15);
    setDegrees(grados)
    setCountry(`${data.sys.country} ${data.name}`)
    setData(response.ok)
  } else {
    setData(response.ok)
  }
}
export default getWeather;
