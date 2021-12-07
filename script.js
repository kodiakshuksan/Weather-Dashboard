

//Puts label on Search Button id
const searchButton = document.getElementById("searchButton");

//Adds Functionality and Event Listener to button
searchButton.addEventListener("click", function(event){
  event.preventDefault();
//Gets the search Value and runs weather search
const cityInput = document.getElementById("userCity").value;
//document.getElementById("searchHistory").innerHTML = cityInput;
//document.getElementById("searchHistory1".innerHTML) = window.history;
getWeather(cityInput);
fiveDayForecast(cityInput);
//getSearch(cityInput);
//createHistoryList(cityInput);
//createHistory();
//getUvIndex(cityInput);
})


//Finds Current Weather By City
const getWeather = (city) => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("city").innerHTML = data.name;
    //document.getElementById("cityA").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "Degrees";
    document.getElementById("humidity").innerHTML = data.main.humidity + '% Humidity';
    document.getElementById("wind").innerHTML = data.wind.speed + 'mph';
    //document.getElementById("icon").innerHTML = data.weather[0].icon;
    //document.getElementById("lat").innerHTML = data.coord.lat;
    //document.getElementById("lon").innerHTML = data.coord.lon;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    console.log(lat)
    console.log(lon)
    getUvIndex(lat, lon);
  });
}
//console.log(document.getElementById("lat".value))
    
    //Gets UV Index using latitude and longitude from above
getUvIndex = (lat, lon) => {
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c')
  .then(response => response.json())
  .then(data => {
    //console.log(data.current)
    //console.log(data.lat)
    document.getElementById("uvIndex").innerHTML = data.current.uvi + "uvi";
    document.getElementById("uvIndex1").innerHTML = data.current.uvi + "uvi";
    document.getElementById("uvIndex2").innerHTML = data.current.uvi + "uvi";
    document.getElementById("uvIndex3").innerHTML = data.current.uvi + "uvi";
    document.getElementById("uvIndex4").innerHTML = data.current.uvi + "uvi";
    document.getElementById("uvIndex5").innerHTML = data.current.uvi + "uvi";
  });
}

//Gets weather for five days in the future
const fiveDayForecast = (city) => {
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c')
  .then(response => response.json())
  .then(data => {
    console.log(data.list)
    //5 Day Temp
    document.getElementById("temp1").innerHTML = data.list[0].main.temp + ' ' + 'Degrees';
    document.getElementById("temp2").innerHTML = data.list[8].main.temp + ' ' + 'Degrees';
    document.getElementById("temp3").innerHTML = data.list[16].main.temp + ' ' + 'Degrees';
    document.getElementById("temp4").innerHTML = data.list[24].main.temp + ' ' + 'Degrees';
    document.getElementById("temp5").innerHTML = data.list[32].main.temp + ' ' + 'Degrees';

    //5 Day Humidity
    document.getElementById("humidity1").innerHTML = data.list[0].main.humidity + '% Humidity';
    document.getElementById("humidity2").innerHTML = data.list[8].main.humidity + '% Humidity';
    document.getElementById("humidity3").innerHTML = data.list[16].main.humidity + '% Humidity';
    document.getElementById("humidity4").innerHTML = data.list[24].main.humidity + '% Humidity';
    document.getElementById("humidity5").innerHTML = data.list[32].main.humidity + '% Humidity';

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

    //Display icons using icon code to make URL to get icon
    const iconCode = data.list[0].weather[0].icon;
    const iconCode1 = data.list[0].weather[0].icon;
    const iconCode2 = data.list[8].weather[0].icon;
    const iconCode3 = data.list[16].weather[0].icon;
    const iconCode4 = data.list[24].weather[0].icon;
    const iconCode5 = data.list[32].weather[0].icon;
    console.log(iconCode)
    console.log(iconCode1)
    console.log(iconCode2)
    console.log(iconCode3)
    console.log(iconCode4)
    console.log(iconCode5)

    const iconUrl = 'http:openweathermap.org/img/wn/'+ iconCode + '@2x.png';
    const iconUrl1 = 'http:openweathermap.org/img/wn/'+ iconCode1 + '@2x.png';
    const iconUrl2 = 'http:openweathermap.org/img/wn/'+ iconCode2 + '@2x.png';
    const iconUrl3 = 'http:openweathermap.org/img/wn/'+ iconCode3 + '@2x.png';
    const iconUrl4 = 'http:openweathermap.org/img/wn/'+ iconCode4 + '@2x.png';
    const iconUrl5 = 'http:openweathermap.org/img/wn/'+ iconCode5 + '@2x.png';
    console.log(iconUrl)
    console.log(iconUrl1)
    console.log(iconUrl2)
    console.log(iconUrl3)
    console.log(iconUrl4)
    console.log(iconUrl5)

    document.getElementById("icon").src = iconUrl;
    document.getElementById("icon1").src = iconUrl;
    document.getElementById("icon1").src = iconUrl1;
    document.getElementById("icon2").src = iconUrl2;
    document.getElementById("icon3").src = iconUrl3;
    document.getElementById("icon4").src = iconUrl4;
    document.getElementById("icon5").src = iconUrl5;
  


    //Get Dates for Five Day forecast
    document.getElementById("day1").innerHTML = "Current Weather";
    //document.getElementById("tomorrow").innerHTML = "Five Day Forecast- Starting Tomorrow"
    document.getElementById("day2").innerHTML = data.list[0].dt_txt;
    document.getElementById("day3").innerHTML = data.list[8].dt_txt;
    document.getElementById("day4").innerHTML = data.list[16].dt_txt;
    document.getElementById("day5").innerHTML = data.list[24].dt_txt;
    document.getElementById("day6").innerHTML = data.list[32].dt_txt;
    console.log(data.list[0].dt_txt)


    
  });
}

//Displays Formal Date and time in Header
const makeWeek = () => {
  const d = new Date();
  const n = d.toDateString();
  console.log(d)
  
  document.getElementById("day1").innerHTML = n;
  
  };
  makeWeek();

  //Display Date
// var today = luxon.DateTime.local();

// var hour = today.c.hour;
// console.log(today.c.hour)
// console.log(today)
// var hour = today.c.hour;
// console.log(hour)
// var date = today.toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });
// console.log(date)
// var changeFormat = today.toLocaleString(DateTime.DATE_MED); //=>  '4/20/2017'
// var newFormat = date.assign(DateTime.DATE_MED, { weekday: 'long' });
// var forPage = dt.toLocaleString(newFormat);

//plannerDate.innerHTML = date;

  
//To Do: History Search that will display links to past cities searched




  
  
  

