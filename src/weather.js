const Apikey = "d51b899179fb28db271a8325cc74f95f";
const iconurl = (iconid) =>
  `https://openweathermap.org/img/wn/${iconid}@2x.png`;

const getcityWeather = async (city, units = "metric") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=${units}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconurl: iconurl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getcityWeather };
