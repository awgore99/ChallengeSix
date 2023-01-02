let button = document.getElementById("button");
let inputValue = document.getElementById("inputValue");
let weather = document.getElementById('weatherType');
let temp = document.getElementById('temp');
let weather1 = document.getElementById('weatherType1');
let temp1 = document.getElementById('temp1');
let weather2 = document.getElementById('weatherType2');
let temp2 = document.getElementById('temp2');
let weather3 = document.getElementById('weatherType3');
let temp3 = document.getElementById('temp3');
let weather4 = document.getElementById('weatherType4');
let temp4 = document.getElementById('temp4');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('windSpeed');
document.addEventListener("DOMContentLoaded", function () {
    button.addEventListener('click', function () {
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputValue.value + '&limit=1&appid=ddc5cfc5943d84511c27118b24a3ba6b')
            .then(response => response.json())
            .then(data => {
                var lat = data.lat;
                var lon = data.lon;
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=ddc5cfc5943d84511c27118b24a3ba6b&units=imperial')
                    .then(response => response.json())
                    .then(data => {
                        var tempVal = data.list[0].main.temp;
                        var weatherVal = data.list[0].weather[0].description;
                        var humidityVal = data.list[0].main.humidity;
                        var windSpeedVal = data.list[0].wind.speed;
                        var temp1Val = data.list[7].main.temp;
                        var weather1Val = data.list[7].weather[0].description;
                        var temp2Val = data.list[15].main.temp;
                        var weather2Val = data.list[15].weather[0].description;
                        var temp3Val = data.list[23].main.temp;
                        var weather3Val = data.list[23].weather[0].description;
                        var temp4Val = data.list[31].main.temp;
                        var weather4Val = data.list[31].weather[0].description;

                        city.innerHTML = inputValue.value;
                        temp.innerHTML = 'Tempature in Fahrenheit: ' + tempVal;
                        weather.innerHTML = 'Forecast: ' + weatherVal;
                        temp1.innerHTML = 'Tempature in Fahrenheit: ' + temp1Val;
                        weather1.innerHTML = 'Forecast: ' + weather1Val;
                        temp2.innerHTML = 'Tempature in Fahrenheit: ' + temp2Val;
                        weather2.innerHTML = 'Forecast: ' + weather2Val;
                        temp3.innerHTML = 'Tempature in Fahrenheit: ' + temp3Val;
                        weather3.innerHTML = 'Forecast: ' + weather3Val;
                        temp4.innerHTML = 'Tempature in Fahrenheit: ' + temp4Val;
                        weather4.innerHTML = 'Forecast: ' + weather4Val;
                        humidity.innerHTML = 'Humidity: ' + humidityVal;
                        windSpeed.innerHTML = 'Wind Speed: ' + windSpeedVal;
                    })
            })
    })
})