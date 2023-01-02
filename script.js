let button = document.getElementById("button");
let inputValue = document.getElementById("inputValue");

document.addEventListener("DOMContentLoaded", function(){
    button.addEventListener('click', function(){
        fetch('http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&limit=1&appid=ddc5cfc5943d84511c27118b24a3ba6b')
        .then(response => response.json())
        .then(data => {
            var lat = data.lat;
            var lon = data.lon;
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=ddc5cfc5943d84511c27118b24a3ba6b&units=imperial')
            .then(response => response.json())
            .then(data => {
                var temp = data.list[0].main.temp;
                var weather = data.list[0].weather[0].description;
                var humidity = data.list[0].main.humidity;
                var windSpeed = data.list[0].wind.speed;
                var temp1 = data.list[7].main.temp;
                var weather1 = data.list[7].weather[0].description;
                var temp2 = data.list[15].main.temp;
                var weather2 = data.list[15].weather[0].description;
                var temp3 = data.list[23].main.temp;
                var weather3 = data.list[23].weather[0].description;
                var temp4 = data.list[31].main.temp;
                var weather4 = data.list[31].weather[0].description;


            })
        })
    })
})