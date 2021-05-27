// //Javascript for Weather Dashboard


// //City Search Bar and Getting current Weather
// console.log("hello")
// //const userInput = document.getElementById("userCity").value;




// const myPromise = 'https:api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c';

// function getWeather() {
//     fetch('https:api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');
// fetchPromise.then(response => {
//     return response.json();
    
// });
// const userInput = document.getElementById("userCity").value;
// console.log(userInput);
// //const userRequest = fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput +' &units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');
// console.log(userRequest) // state is pending

// setTimeout(() => {
//     console.log(characters) // state is "fulfilled" or "rejected"
// }, 5000);

// }

// document.getElementById("searchButton").addEventListener("click", getWeather);
// // // returns a promise
// // const characters = fetch('https://api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');
// // // chain methods on our promise

// //     .then(data => data.json())
// //     .then(data => {
// //         console.log(data)
// //     })
// //     .catch((error) => {
// //         console.error(error)
// //     })


// // // const weather =
// // //     fetch('https:api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');
// // // weather.then(response => {
// // //     return response.json();
// // // }).then(tacoma => {
// // //     console.log(tacoma)
// // // })

// // // const weatherSearch =
// // //     fetch('https:api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');
// // //     return response.json();
// // // }).then()



// // // const fetchCatch =
// // //     fetch('https:api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');

// // // const myWeather = weatherSearch.then(response => {
// // //     return response.json();
// // // }).then(tacoma => {
// // //     tacoma.map(name => name.city).join("\n");
// // //     console.log(city);
// // // });



// // // console.log(fetchPromise);


// // //console.log(cityUrl)

// // // var weatherCity = $(".searchButton").click(function userCity(event) {
// // //     var cityInput =
// // //         document.getElementById("userCity").value;
// // //     document.getElementById(
// // //         "cityWeather").innerHTML = userCity;
// // //     console.log(userCity)
// // // });




// // // var searchCity = $(".searchButton").click(function (event) {
// // //     // var city = $("userCity.form-control.me-2").value;
// // //     // console.log(city)

// // //     fetch(
// // //         cityUrl
// // //     )
// // //         .then(function (response) {
// // //             return response.json();
// // //         })
// // //         .then(function (data) {
// // //             console.log(data);
// // //         })
// // // })
// // // console.log($("#userCity").value);

// // // getting Future Forecast
// // //var Tacoma = document.getElementById("userCity").value;
// // // fetch(
// // //     cityUrl
// // // )
// // //     .then(function (response) {
// // //         return response.json();
// // //     })
// // //     .then(function (data) {
// // //         console.log(data);
// // //     });

// // // document.getElementById("searchButton").addEventListener("click", weatherCity);
// // // document.getElementById("searchButton").addEventListener("click", searchCity);


// // // var searchForm = document.querySelector('searchForm');
// // // console.log(searchForm)
// // // var cityInput = document.querySelector('city');
// // // console.log(cityInput)
// // // var searchResults = document.querySelector('currentWeather');
// // // var citysWeather = document.querySelector('citysWeather');

// // // var formSubmitHandler = function (event) {
// // //   event.preventDefault();

// // //   var cityName = cityInput.value.trim();

// // //   if (cityName) {
// // //     getCity(cityName);

// // //     searchResults.textContent = '';
// // //     cityInput.value = '';
// // //   } else {
// // //     alert('Please enter a city!');
// // //   }
// // // };



// // // var getCity = function () {
// // //   var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;

// // //   fetch(weatherUrl)
// // //     .then(function (response) {
// // //       if (response.ok) {
// // //         console.log(response);
// // //         response.json().then(function (data) {
// // //           console.log(data);
// // //           displayResults(data, city);
// // //         });
// // //       } else {
// // //         alert('Error: ' + response.statusText);
// // //       }
// // //     })
// // //     .catch(function (error) {
// // //       alert('Unable to connect to Open Weather');
// // //     });
// // // };




// // // var displayResults = function (city, city) {
// // //   if (city.length === 0) {
// // //     searchResults.textContent = 'No weather found.';
// // //     return;
// // //   }

// // //   citysWeather.textContent = searchTerm;

// // //   for (var i = 0; i < data.length; i++) {

// // //     var weather = data[i].main + '/' + data[i].temp;
// // //     return;

// // // var weatherResults = document.createElement('div');
// // // weatherResults.classList = 'list-item flex-row justify-space-between align-center';

// // // var weatherNow = document.createElement('span');
// // // weatherNow.textContent = weatherNow;

// // // weatherResults.appendChild(weatherNow);

// // // var statusEl = document.createElement('span');
// // // statusEl.classList = 'flex-row align-center';

// // // if (data[i].open_issues_count > 0) {
// // //   statusEl.innerHTML =
// // //     "<i class='fas fa-times status-icon icon-danger'></i>" + data[i].open_issues_count + ' issue(s)';
// // // } else {
// // //   statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
// // // }

// // // weatherResults.appendChild(statusEl);

// // // searchResults.appendChild(weatherResults);
// // //   }
// // // };
// // // console.log(displayResults)

// // //searchForm.addEventListener('submit', formSubmitHandler);


// // //getting uv index
// // // fetch(
// // //   'https://api.openweathermap.org/data/2.5/uvi?lat=47.2529&lon=-122.4443&appid=335fc46330e5a6ab7ec6dbd91233522c'
// // // )
// // //   .then(function (response) {
// // //     return response.json();
// // //   })
// // //   .then(function (data) {
// // //     console.log(data);
// // //   });

// // //defining units in Fahrenheit
// // // fetch(
// // //   'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c'
// // // )
// // //   .then(function (response) {
// // //     return response.json();
// // //   })
// // //   .then(function (data) {
// // //     console.log(data);
// // //   });

// // // defining time

// // // fetch(
// // //   'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c'
// // // )
// // //   .then(function (response) {
// // //     return response.json();
// // //   })
// // //   .then(function (data) {
// // //     console.log(data.lat);
// // //   });

// //       //     let response = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c',
// //       //       {
// //       //           method: 'POST',
// //       //           mode: 'cors',
// //       //           body: "param=" + paramVar,
// //       //           headers: {
// //       //             'Content-Type': 'application/json'
// //       //           }
// //       //       }
// //       // ).then(response => response.json());











