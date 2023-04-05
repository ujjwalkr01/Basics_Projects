const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b1bc007cf6msh203082e96b9dde9p14d4f0jsn40d10affb0b8",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      wind_speed1.innerHTML = response.wind_speed;
      temp1.innerHTML = response.temp;
      humidity1.innerHTML = response.humidity;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      console.log(response);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Bengaluru");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York",
  options
)
  .then((response) => response.json())
  .then((response) => {
    NewYorkfeels_like.innerHTML = response.feels_like;
    NewYorkhumidity.innerHTML = response.humidity;
    NewYorkmax_temp.innerHTML = response.max_temp;
    NewYorkmin_temp.innerHTML = response.min_temp;
    NewYorktemp.innerHTML = response.temp;
    NewYorkwind_degrees.innerHTML = response.wind_degrees;
    NewYorkwind_speed.innerHTML = response.wind_speed;
    console.log(response);
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
  options
)
  .then((response) => response.json())
  .then((response) => {
    Londonfeels_like.innerHTML = response.feels_like;
    Londonhumidity.innerHTML = response.humidity;
    Londonmax_temp.innerHTML = response.max_temp;
    Londonmin_temp.innerHTML = response.min_temp;
    Londontemp.innerHTML = response.temp;
    Londonwind_degrees.innerHTML = response.wind_degrees;
    Londonwind_speed.innerHTML = response.wind_speed;
    console.log(response);
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Singapore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    Singaporefeels_like.innerHTML = response.feels_like;
    Singaporehumidity.innerHTML = response.humidity;
    Singaporemax_temp.innerHTML = response.max_temp;
    Singaporemin_temp.innerHTML = response.min_temp;
    Singaporetemp.innerHTML = response.temp;
    Singaporewind_degrees.innerHTML = response.wind_degrees;
    Singaporewind_speed.innerHTML = response.wind_speed;
    console.log(response);
  })
  .catch((err) => console.error(err));
