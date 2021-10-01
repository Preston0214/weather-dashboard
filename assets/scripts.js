var cityName;
var {lat} = location;
var {lon} = location;
var apiBaseUrl = 'https://api.openweathermap.org/';
var searchBtn = $('#searchBtn');

function getCoords(){
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b078f64a50989fdeb7bf58c9372972ad`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        lat = data.coord.lat;
        lon = data.coord.lon;
        console.log(lon)
        console.log(lat)
        getWeather();
    });
}

function getWeather(){
    var requestUrl = `${apiBaseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=b078f64a50989fdeb7bf58c9372972ad`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
    });
}

function search(event){
    cityName = $('#userInput').val()
    event.preventDefault()
    console.log('yes')
    console.log(cityName)
    getCoords()
}

searchBtn.on('click',search)
