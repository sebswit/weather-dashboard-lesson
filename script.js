document.addEventListener('DOMContentLoaded', function () {

  const APIKey = "00be002f543021f3f037894c47ccc2ac";

  function getCurrentWeather(city) {
      fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
      )
      .then((response) => response.json())
      .then((data) => {
          updateCurrentWeather(data);
      });
  }

  function updateCurrentWeather(data) {
      const todaySection = document.getElementById('today');
      const cityNameElement = document.getElementById('city-name');
      const temperatureElement = document.getElementById('current-temperature');
      const humidityElement = document.getElementById('current-humidity');
      const windSpeedElement = document.getElementById('current-wind-speed');

      cityNameElement.textContent = data.name;
      temperatureElement.textContent = `Temperature: ${Math.round(convertKelvinToCelsius(data.main.temp))}°C`;

      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  }

  function get5DayForecast(city) {
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

      fetch(forecastUrl)
      .then(response => response.json())
      .then(data => {
          updateForecast(data);
      })
      .catch(error => console.error('Error fetching forecast data:', error));
  }

  function convertKelvinToCelsius(temperature) {
      return (temperature - 273.15).toFixed(2);
  }

  function updateForecast(data) {
    const forecastSection = document.getElementById('forecast');
    forecastSection.innerHTML = ''; // Clear previous content

    // Initialize variables to keep track of the current date
    let currentDate = '';
    let isFirstForecastForDay = true;

    for (let i = 0; i < data.list.length; i++) {
        const forecastItem = data.list[i];
        const date = forecastItem.dt_txt.split(' ')[0]; // Extracting date from forecastItem
        const temperature = Math.round(convertKelvinToCelsius(forecastItem.main.temp)); // Round temperature to nearest integer
        const humidity = forecastItem.main.humidity;

        // Check if it's a new day
        if (date !== currentDate) {
            // If it's not the first forecast for the day, create a new forecast item
            if (!isFirstForecastForDay) {
                const forecastItemElement = document.createElement('div');
                const dateElement = document.createElement('p');
                dateElement.textContent = currentDate;
                forecastItemElement.appendChild(dateElement);

                const temperatureElement = document.createElement('p');
                temperatureElement.textContent = `Temperature: ${temperature}°C`;
                forecastItemElement.appendChild(temperatureElement);

                const humidityElement = document.createElement('p');
                humidityElement.textContent = `Humidity: ${humidity}%`;
                forecastItemElement.appendChild(humidityElement);

                forecastSection.appendChild(forecastItemElement);
            }

            // Update currentDate to the new date and reset isFirstForecastForDay
            currentDate = date;
            isFirstForecastForDay = false;
        }
    }
}



  

  function handleFormSubmission(event) {
      event.preventDefault();
      const cityInput = document.getElementById('search-input');
      const city = cityInput.value.trim();
      if (city !== '') {
          getCurrentWeather(city);
          get5DayForecast(city);
          addToSearchHistory(city);
      }
      cityInput.value = '';
  }

  function addToSearchHistory(city) {
      const historyList = document.getElementById('history');
      const historyItem = document.createElement('button');
      historyItem.textContent = city;
      historyItem.addEventListener('click', function () {
          getCurrentWeather(city);
          get5DayForecast(city);
      });
      historyList.appendChild(historyItem);
  }

  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', handleFormSubmission);

});
