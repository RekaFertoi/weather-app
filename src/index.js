// calculate date and time
function changeDate() {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let weekdays = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[weekdays];

  return `${day} ${hour}:${minute}`;
}

let newdate = document.querySelector("#go-button");
newdate.addEventListener("click", changeDate);

// display city
function searchCity(event) {
  event.preventDefault();
  let searchinput = document.querySelector("#input-city");
  let currentcity = document.querySelector("#current-city");
  currentcity.innerHTML = searchinput.value;

  // change weather inputs
  let city = searchinput.value;
  let apiKey = "0338b821f57d8e8b5a5015ec385d4b83";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  function showTemp(response) {
    let currentTemp = Math.round(response.data.main.temp);
    let tempInput = document.querySelector("#temp-cels");
    tempInput.innerHTML = currentTemp;
    let humInput = document.querySelector("#hum");
    humInput.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    let windInput = document.querySelector("#wind");
    windInput.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
    console.log(response);
    let description = document.querySelector("#w-description");
    description.innerHTML = response.data.weather[0].main;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let newcity = document.querySelector("#go-button");
newcity.addEventListener("click", searchCity);
