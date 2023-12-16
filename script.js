

// create a variable to store the city name
var city = $("#search-input").val();
// create a variable to store API key
const apiKey = "";
// create a variable to store the queryURL
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
// create a variable to store the search history
var searchHistory = [];
// create a variable to store the current date
var currentDate = date.js().format('L');
   // use a data.js 

// event listener for search button
$("#search-button").on("click", function(event) {
  event.preventDefault();
  // get the city name from the input field
  var city = $("#search-input").val();
  // add the city name to the search history
  searchHistory.push(city);
  // save the search history to local storage
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  // call the getWeather function
  getWeather();
});

// Function to get data from openweather for current weather
// data for current weather 
  // city name
  // date
   // weather icon
   // temperature
   // humidity
   // wind speed


// Function to get data from openweather for 5 day forecast
// data for 5 day forecast
  // date
  // weather icon
  // temperature
  // humidity


// function to display data on page
  // create card for current wather
   // create card for 5 day forecast
// 