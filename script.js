
 // Use .val() instead of .value to get the value of an input field
document.addEventListener('DOMContentLoaded', function () {
// create a variable to store API key
const APIKey = "00be002f543021f3f037894c47ccc2ac";


// Function to handle and update HTML with current weather data
function getCurrentWeather(city) {
  var city = $("#search-input").val();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateCurrentWeather(data);
    });
}
// Function to update the current weather section in the UI
function updateCurrentWeather(data) {
  const todaySection = document.getElementById('today');
  const cityNameElement = document.getElementById('city-name');
  const temperatureElement = document.getElementById('temperature');// convert to Celsius
  const humidityElement = document.getElementById('humidity');
  const windSpeedElement = document.getElementById('wind-speed');

  // Update UI with current weather data
  cityNameElement.textContent = data.name;
  temperatureElement.textContent = data.main.temp;
  humidityElement.textContent = data.main.humidity;
  windSpeedElement.textContent = data.wind.speed;
}
// Function to get 5-day forecast data
function get5DayForecast(city) {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      // Update the forecast section in the UI
      updateForecast(data);
    })
    .catch(error => console.error('Error fetching forecast data:', error));
}

// Function to update the forecast section in the UI
function updateForecast(data) {
  const forecastSection = document.getElementById('forecast');
  forecastSection.innerHTML = ''; // Clear previous content

  // Loop through the forecast data and update UI
  for (let i = 0; i < data.list.length; i += 8) {
    const forecastItem = data.list[i];
    const date = forecastItem.dt_txt.split(' ')[0];
    const temperature = forecastItem.main.temp;
    const humidity = forecastItem.main.humidity;
    const forecastItemElement = document.createElement('div');
    
    forecastSection.appendChild(forecastItemElement);
  }
}
// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  // Get the city from the input field
  const cityInput = document.getElementById('search-input');
  const city = cityInput.value.trim();

  // Check if the city is not empty
  if (city !== '') {
    // Get current weather and 5-day forecast for the city
    getCurrentWeather(city);
    get5DayForecast(city);

    // Add the city to the search history
    addToSearchHistory(city);
  }

  // Clear the input field after submission
  cityInput.value = '';
}

// Function to add the city to the search history
function addToSearchHistory(city) {
  const historyList = document.getElementById('history');
  const historyItem = document.createElement('button');
  historyItem.textContent = city;

  // Add an event listener to handle click on the search history item
  historyItem.addEventListener('click', function () {
    // When clicked, fetch current weather and forecast for the selected city
    getCurrentWeather(city);
    get5DayForecast(city);
  });

  // Add the history item to the list
  historyList.appendChild(historyItem);
}

// Event listener for form submission
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleFormSubmission);

});

// known issues:
// not displaying 5 day forecast
// not displaying search history
// update CSS
// convert temp to Celsius

