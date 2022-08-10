// calculate date and time
function changeDate() {
  let now = new Date();
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let currentdate = document.querySelector("#date-today");
  currentdate.innerHTML = day + " " + hour + ":" + minute;
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
    windInput.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
    console.log(response);
    let description = document.querySelector("#w-description");
    description.innerHTML = response.data.weather[0].main;
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let newcity = document.querySelector("#go-button");
newcity.addEventListener("click", searchCity);
