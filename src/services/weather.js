async function getWeather(position) {
  const lat = await position.coords.latitude;
  const lon = await position.coords.longitude;
  const key = "091ec36883705339db6f4e5fbef580dc";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}` //datos meteorologicos actuales segun la ubicacion
  );
  const data = await response.json();
  console.log(data);
}
export default getWeather;
