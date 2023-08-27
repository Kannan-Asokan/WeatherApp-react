import hot from "./images/hot-sun.jpg";
import cold from "./images/warm.jpg";
import Description from "./Description";
import { useEffect, useState } from "react";
import { getcityWeather } from "./weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("chennai");
  const [backgrd, setBackgrd] = useState(hot);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getcityWeather(city, units);
      setWeather(data);

      const background = units === "metric" ? 30 : 60;
      if (data.temp <= background) {
        setBackgrd(cold);
      } else {
        setBackgrd(hot);
      }
    };
    fetchWeather();
  }, [units, city]);

  function handleUnits(e) {
    const button = e.currentTarget;
    const currentunit = button.innerText.slice(1);
    const celsius = currentunit === "C";
    button.innerText = celsius ? `\u00b0` + "F" : `\u00b0` + "C";
    setUnits(celsius ? "metric" : "imperial");
  }

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${backgrd})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section sectioninputs">
              <input
                type="text"
                onKeyDown={enterKey}
                name="city"
                placeholder="Enter the City.."
              />
              <button onClick={(e) => handleUnits(e)}>&deg;F</button>
            </div>
            <div className="section sectiontemparature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img
                  src={weather.iconurl}
                  alt="weathericon"
                  title="Weather Icon"
                />
                <h3 className="h3">{weather.description}</h3>
              </div>
              <div className="temparature">
                <h1>{`${weather.temp.toFixed()} \u00b0${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>

            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
