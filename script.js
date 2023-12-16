

// create a variable to store the city name
var citySearch = $("#search-input").val();
// create a variable to store API key
const apiKey = "";
// create a variable to store the queryURL
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=lat=" + lat + "lon=" + lon + "&appid=" + apiKey;
var queryURLforecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey;
// create a variable to store the search history
var searchHistory = [];

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

//convert city name to lat and lon
function getLocation(city) {
   if (city.geolocation) {
     city.geolocation.watchPosition(showPosition);
   } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
   }
 }
     
 function showPosition(position) {
   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
 }
// Function to get data from openweather for current weather
 fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // city name
    var cityName = data.name;  
    // date
    var currentDate = data.dt;
    // temperature
    var temp = data.main.temp;
    //humidity
    var humidity = data.main.humidity;  
      // wind speed
    var windSpeed = data.wind.speed;
      // weather icon
    var icon = data.weather[0].icon; 
  });

// Function to get data from openweather for 5 day forecast
fetch(queryURLforecast)
   .then(function (response) {
      return response.json();
   })
   .then(function (data) {
      // date
      var date = data.list[0].dt_txt;
      // temperature
      var temp = data.list[0].main.temp;
      //humidity
      var humidity = data.list[0].main.humidity;  
         // weather icon
      var icon = data.list[0].weather[0].icon; 
   });
// function to display data on page
function displayWeather() {
   // create card for current wather

   // create card for 5 day forecast
  
// 
}