const input = document.querySelector(".input");
const display = document.querySelector(".display");
const searchBtn = document.querySelector(".search");
const celcuis = document.querySelector(".celcuis");
const cityName = document.querySelector(".city-name");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");

function fixed (weather) {
  return Math.ceil(weather);
}

const apiKey = "024176e6d5471f4bd34ceb36a09fa6aa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Helmand`;

async function weatherApp() {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}`;

  try {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  celcuis.innerHTML = `${fixed(data.main.temp)} °c`;
  cityName.innerHTML = data.name;
  windSpeed.innerHTML = fixed(data.wind.speed) + " km/h";
  humidity.innerHTML = fixed(data.main.humidity) + "%";
  } catch(error) {
    alert("not found");
  }

  input.value = "";
  }

  searchBtn.addEventListener("click", () => {
    weatherApp();
  });

  input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
      weatherApp();
    }
  });