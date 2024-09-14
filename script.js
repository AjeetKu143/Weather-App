// app.js
const apiKey = '08d415bed51dddea634e2d686f52f4cd'; // Your API key

document.getElementById('get-weather-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.log('Error:', error);
      alert('City not found!');
    });
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;
  const windSpeedMps = data.wind.speed;  // Wind speed in meters per second
  const windSpeedKph = (windSpeedMps * 3.6).toFixed(2);  // Convert to km/h

  // Get current date and time
  const currentDateTime = new Date().toLocaleString();

  // Display weather info after fetching data
  document.getElementById('weather-info').style.display = 'block';

  // Update DOM elements with weather and wind speed (in km/h)
  document.getElementById('city-name').textContent = `Weather in ${cityName}`;
  document.getElementById('temp-value').textContent = `${temperature}°C`;
  document.getElementById('desc-value').textContent = weatherDescription;
  document.getElementById('humidity-value').textContent = `${humidity}%`;
  document.getElementById('wind-value').textContent = `${windSpeedKph} km/h`;
  document.getElementById('date-time').textContent = currentDateTime; // Just the date and time
}
