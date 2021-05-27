//Puts label on Search Button id
const searchButton = document.getElementById("searchButton");

//Adds Functionality and Event Listener to button
searchButton.addEventListener("click", function(event){
  event.preventDefault();
//Gets the search Value and runs weather search
const cityInput = document.getElementById("userCity").value;
getWeather(cityInput);
fiveDayForecast(cityInput);
getUvIndex();
})


//Finds Current Weather By City
const getWeather = (city) => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("wind").innerHTML = data.wind.speed;
    document.getElementById("icon").innerHTML = data.weather[0].icon;
  });
}

//Gets weather for five days in the future
const fiveDayForecast = (city) => {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c')
  .then(response => response.json())
  .then(data => {
    console.log(data.list)
    //5 Day Temp
    document.getElementById("temp1").innerHTML = data.list[0].main.temp;
    document.getElementById("temp2").innerHTML = data.list[8].main.temp;
    document.getElementById("temp3").innerHTML = data.list[16].main.temp;
    document.getElementById("temp4").innerHTML = data.list[24].main.temp;
    document.getElementById("temp5").innerHTML = data.list[32].main.temp;

    //5 Day Humidity
    document.getElementById("humidity1").innerHTML = data.list[0].main.humidity;
    document.getElementById("humidity2").innerHTML = data.list[8].main.humidity;
    document.getElementById("humidity3").innerHTML = data.list[16].main.humidity;
    document.getElementById("humidity4").innerHTML = data.list[24].main.humidity;
    document.getElementById("humidity5").innerHTML = data.list[32].main.humidity;

    //5 Day Wind Speed
    document.getElementById("wind1").innerHTML = data.list[0].wind.speed + 'mph';
    document.getElementById("wind2").innerHTML = data.list[8].wind.speed + 'mph';
    document.getElementById("wind3").innerHTML = data.list[16].wind.speed + 'mph';
    document.getElementById("wind4").innerHTML = data.list[24].wind.speed + 'mph';
    document.getElementById("wind5").innerHTML = data.list[32].wind.speed + 'mph';

    //Five Day Forecast Icons
    document.getElementById("icon1").innerHTML = data.list[0].weather[0].icon;
    document.getElementById("icon2").innerHTML = data.list[8].weather[0].icon;
    document.getElementById("icon3").innerHTML = data.list[16].weather[0].icon;
    document.getElementById("icon4").innerHTML = data.list[24].weather[0].icon;
    document.getElementById("icon5").innerHTML = data.list[32].weather[0].icon;

    //Gets UV Index
    // getUvIndex = (city) => {
    //   fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.list)
    //   });
    // }



  });
}

//Gets UV Index
getUvIndex = () => {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c')
  .then(response => response.json())
  .then(data => {
    console.log(data.current.uvi)
  });
}

//create history bar
//create icons
//create uv index
//display days of week or date on weather dashboard