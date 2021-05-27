// //Javascript for Weather Dashboard


// //City Search Bar and Getting current Weather
// console.log("hello")


// fetch('https://api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c');


// //var cityInput = document.getElementById("userCity").placeholder;
// //var searchValue = userCity.valueOf();

// //var city = cityInput.value;



// const cityUrl = "https://api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial+&appid=335fc46330e5a6ab7ec6dbd91233522c";

// fetch(
//     cityUrl
// )
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

// fetch(
//     cityUrl
// )
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         var dataObj = 
//     });



// // gets data from API and sets the content of #result div
// const getData = function () {
//     result.innerText = 'Loading....'
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q=tacoma&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c')
//         .then(res => res.json())
//     console.log(result)
//         .then(data => {
//             result.innerText = JSON.stringify(data)
//         })
//         .catch(error => console.log(error));
// }
// // add event listener for #fetchdata button
// searchButton.addEventListener('click', getData);


// // var weatherCity = $(".searchButton").click(function userCity(event) {
// //     var cityInput =
// //         document.getElementById("userCity").value;
// //     document.getElementById(
// //         "cityWeather").innerHTML = userCity;
// //     console.log(userCity)

// // do something

// // });
// // fetch(cityUrl, fetchParams)
// //     .then(res => {
// //         if (!res.ok) {
// //             throw new Error(res.statusText);
// //         }
// //         return res.json();
// //     })
// //     .then(data => {
// //         const weatherData = data;
// //         const weatherInfo = [];
// //         weatherData.forEach(function (getData) {
// //             weatherInfo.push([name.city, parseInt(main.temp)]);
// //         })
// //             .catch(err => {
// //                 console.log("Error Getting Data From Star Wars API");
// //             });






// // var searchCity = $(".searchButton").click(function (event) {
// //     // var city = $("userCity.form-control.me-2").value;
// //     // console.log(city)

// //     fetch(
// //         cityUrl
// //     )
// //         .then(function (response) {
// //             return response.json();
// //         })
// //         .then(function (data) {
// //             console.log(data);
// //         })
// // })
// // console.log($("#userCity").value);

// // getting Future Forecast
// //var Tacoma = document.getElementById("userCity").value;
// // fetch(
// //     cityUrl
// // )
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (data) {
// //         console.log(data);
// //     });




// // fetch(
// //     cityUrl
// // )
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (data) {
// //         console.log(data);
// //     });



// // fetch(

// // )
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (data) {
// //         console.log(data);
// //     });


// // fetch("broken-url")
// //     .then(response => console.log(response))
// //     .catch(error => console.log(error));


// // fetch(
// //     cityUrl
// // )
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (data) {
// //         console.log(data);
// //     });

// // fetch(
// //     cityUrl
// // )
// //     .then(function (response) {
// //         return response.json();
// //     })
// //     .then(function (dataname) {
// //         console.log(data.name);
// //     });





// // document.getElementById("searchButton").addEventListener("click", weatherCity);
// // document.getElementById("searchButton").addEventListener("click", searchCity);



// // var searchForm = document.querySelector('searchForm');
// // console.log(searchForm)
// // var cityInput = document.querySelector('city');
// // console.log(cityInput)
// // var searchResults = document.querySelector('currentWeather');
// // var citysWeather = document.querySelector('citysWeather');

// // var formSubmitHandler = function (event) {
// //   event.preventDefault();

// //   var cityName = cityInput.value.trim();

// //   if (cityName) {
// //     getCity(cityName);

// //     searchResults.textContent = '';
// //     cityInput.value = '';
// //   } else {
// //     alert('Please enter a city!');
// //   }
// // };



// // var getCity = function () {
// //   var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city;

// //   fetch(weatherUrl)
// //     .then(function (response) {
// //       if (response.ok) {
// //         console.log(response);
// //         response.json().then(function (data) {
// //           console.log(data);
// //           displayResults(data, city);
// //         });
// //       } else {
// //         alert('Error: ' + response.statusText);
// //       }
// //     })
// //     .catch(function (error) {
// //       alert('Unable to connect to Open Weather');
// //     });
// // };




// // var displayResults = function (city, city) {
// //   if (city.length === 0) {
// //     searchResults.textContent = 'No weather found.';
// //     return;
// //   }

// //   citysWeather.textContent = searchTerm;

// //   for (var i = 0; i < data.length; i++) {

// //     var weather = data[i].main + '/' + data[i].temp;
// //     return;

// // var weatherResults = document.createElement('div');
// // weatherResults.classList = 'list-item flex-row justify-space-between align-center';

// // var weatherNow = document.createElement('span');
// // weatherNow.textContent = weatherNow;

// // weatherResults.appendChild(weatherNow);

// // var statusEl = document.createElement('span');
// // statusEl.classList = 'flex-row align-center';

// // if (data[i].open_issues_count > 0) {
// //   statusEl.innerHTML =
// //     "<i class='fas fa-times status-icon icon-danger'></i>" + data[i].open_issues_count + ' issue(s)';
// // } else {
// //   statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
// // }

// // weatherResults.appendChild(statusEl);

// // searchResults.appendChild(weatherResults);
// //   }
// // };
// // console.log(displayResults)

// //searchForm.addEventListener('submit', formSubmitHandler);


// //getting uv index
// // fetch(
// //   'https://api.openweathermap.org/data/2.5/uvi?lat=47.2529&lon=-122.4443&appid=335fc46330e5a6ab7ec6dbd91233522c'
// // )
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     console.log(data);
// //   });

// //defining units in Fahrenheit
// // fetch(
// //   'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c'
// // )
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     console.log(data);
// //   });

// // defining time

// // fetch(
// //   'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c'
// // )
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     console.log(data.lat);
// //   });

//       //     let response = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.4443&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c',
//       //       {
//       //           method: 'POST',
//       //           mode: 'cors',
//       //           body: "param=" + paramVar,
//       //           headers: {
//       //             'Content-Type': 'application/json'
//       //           }
//       //       }
//       // ).then(response => response.json());











