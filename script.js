
// create a variable to store the city name
var city = $("#search-input").val();
// create a variable to store API key
const apiKey = "";
// create a variable to store the queryURL
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
// create a variable to store the search history
var searchHistory = [];
// create a variable to store the current date
var currentDate = moment().format('L');
   // use a data.js 

// create a variable to store the current weather
var currentWeather = data.currentWeather;
// create a variable to store the forecast
var forecast = data.forecast;
// create a variable to store the temperature
var temp = data.temp;
// create a variable to store the icon
var icon = data.icon;
// create a variable to store the humidity
var humidity = data.humidity;
// create a variable to store the wind speed
var windSpeed = data.windSpeed;

// Function to get data from openweather
function getWeather() {
    // fetch data from openweather
    fetch(queryURL)
    // parse data
    .then(function (response) {
        return response.json();
    })
    // display data
    .then(function (data) {
        // update HTML
        // update current weather
        // update date
        // update city name
        // update 5 day forecast
        // update search history
        // update humidity
        // update wind speed
        // update forecast
        // update date
        // update icon
        // update temp
        // update humidity
        // save to local storage
        // check if city is in local storage
        // if not, add city to local storage
        // if yes, do nothing
        // get data from local storage
        // display data
    });
}

// get data from form
    // get city name from form
    
    // function to validate form 
    // clear form
    $("#city").val("");
    //
// fetch data from openweather
fetch(queryURL)


   // fetch(queryURL)
   // parse data
   // display data
// update HTML
  // update current weather
    // update date
    // update city name
    // update 5 day forecast
    // update search history
    // update humidity
    // update wind speed
 // update forecast
    // update date
    // update icon
    // update temp
    // update humidity
 // save to local storage
   // check if city is in local storage
    // if not, add city to local storage
    // if yes, do nothing
 // get data from local storage
    // display data
