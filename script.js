function displayTemperature(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let displayTemperature = document.querySelector("#current-temperature");
  displayTemperature.innerHTML = currentTemperature;
  let city = document.querySelector("#current-city");
  city.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}km/h`;
}

function searchCity(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#search-bar");
  let cityInput = searchBar.value;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=1136ceca40tf043bcc6199c0oa5b640a&unit=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function formatDate(date) {
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let date = document.querySelector("#current-date");
let currentDate = new Date();
date.innerHTML = formatDate(currentDate);
