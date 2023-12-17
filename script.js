
//var city = document.getElementById("search-input").value;
// create a variable to store the city name
 
// create a variable to store API key
const APIKey = "00be002f543021f3f037894c47ccc2ac";
// Here we are building the URL we need to query the database
//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;

$('#search-button').on('click', function(event){
   event.preventDefault();
  var city = document.getElementById("search-input").value;
  console.log(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" +APIKey;

  fetch(queryURL).then(function(response){
    return response.json();
  }).then(function(data){ 
    console.log(data);
    $('#today').text(JSON.stringify(data.name));
  });
});
// Function to handle and update HTML with current weather data
function handleCurrentWeather(data) {
  const todaySection = document.getElementById('today');
  todaySection.innerHTML = `
    <h3>Today's Weather</h3>
    <p>City: ${data.name}</p>
    <p>Date: ${new Date(data.dt * 1000).toLocaleDateString()}</p>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}


