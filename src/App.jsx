import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [cityName, setCityName] = useState('')
  const [weather, setWeather] = useState({})



  const getWeather = (e) => {
    e.preventDefault();
    console.log("CityName", cityName)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2baadce54194fdee21bed0ae9b7ab7a4&units=metric`)
      .then(function (response) {

        console.log("data: ", response.data);

        setWeather(response.data)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }








  return (
    <div className="mi">    <center>
      <h1>Weather App</h1>

      <div className="App">


        <br />
        <form onSubmit={getWeather}>


          City Name :<input
            type="text" 
            placeholder='Enter City Name'
            onChange={(e) => {
              setCityName(e.target.value
              )
            }} />






          <button type='submit'>Get Weather</button>

        </form>
      </div>
      <br />
      <br />

      <center>
        <div className='abc'>{(weather?.name) ?
          <div className='b'>
            <div style={{ margin: 15 }}>City Name : <h1>{weather.name}</h1></div>
            <div style={{ margin: 15 }}>Temp : <h1>{weather.main.temp} °C</h1></div>
            <div style={{ margin: 15 }}>Humidity <h1>{weather.main.humidity}</h1> </div>

            <div style={{ margin: 15 }}>Wind Speed: <h1>{weather.wind.speed}</h1></div>
            <div style={{ margin: 15 }}>Max and Min <center><h1>{weather.main.temp_max}°C - {weather.main.temp_min}°C</h1></center> </div>
          </div>
          : null
        }</div></center>
    </center>

    </div>
  );
}

export default App;
