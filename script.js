//Javascript


//City Search Bar and Getting current Weather
console.log("hello")



var searchButton = document.querySelector('searchButton');
console.log(searchButton)
var cityInput = document.querySelector('city');
console.log(cityInput)
var searchResults = document.querySelector('currentWeather');
var citysWeather = document.querySelector('citysWeather');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityName = cityInput.value.trim();

  if (cityName) {
    getCity(cityName);

    searchResults.textContent = '';
    cityInput.value = '';
  } else {
    alert('Please enter a city!');
  }
};



var getCity = function () {
  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;

  fetch(weatherUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayResults(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Open Weather');
    });
};




var displayResults = function (city, city) {
  if (city.length === 0) {
    searchResults.textContent = 'No weather found.';
    return;
  }

  citysWeather.textContent = searchTerm;

  for (var i = 0; i < data.length; i++) {
    
    var weather = data[i].main + '/' + data[i].temp;
    return;

    var weatherResults = document.createElement('div');
    weatherResults.classList = 'list-item flex-row justify-space-between align-center';

    var weatherNow = document.createElement('span');
    weatherNow.textContent = weatherNow;

    weatherResults.appendChild(weatherNow);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (data[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + data[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    weatherResults.appendChild(statusEl);

    searchResults.appendChild(weatherResults);
  }
};
console.log(displayResults)

// searchButton.addEventListener('submit', formSubmitHandler);

  

  



  




 // getting current weather

 

    





//getting Future Forecast
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=temp&appid=335fc46330e5a6ab7ec6dbd91233522c'
    )
      .then(function (response) {
        return response.json();
      })
        .then(function (data) {
          console.log(data);
        });
          


      //getting uv index
      fetch(
        'https://api.openweathermap.org/data/2.5/uvi?lat=47.2529&lon=-122.4443&appid=335fc46330e5a6ab7ec6dbd91233522c'
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
  
  //defining units in Fahrenheit
      fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c'
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });

// defining time

      fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c'
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
  




  



