import logo from "./logo.svg";
import "./App.css";

function App() {
  navigator.geolocation.watchPosition((position) => {
    console.log(position);
  });

  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
