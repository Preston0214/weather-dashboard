var cityName = "London";
var lat;
var lon;

function getCoords(){
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=b078f64a50989fdeb7bf58c9372972ad'
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        console.log(data.coord.lat)
        lat = data.coord.lat;
        lon = data.coord.lon;
        console.log(lon)
        console.log(lat)
    });
}

getCoords();


// var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?q="+cityName+"&units=imperial&appid=b078f64a50989fdeb7bf58c9372972ad";

function getWeather(){
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&appid=b078f64a50989fdeb7bf58c9372972ad'
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        
    });
}

getWeather();