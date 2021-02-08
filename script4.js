var userFormEl = document.querySelector('#searchForm');

var nameInputEl = document.querySelector('#userCity');
var ContainerEl = document.querySelector('#results');
var citySearchTerm = document.querySelector('#city-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();

    var userCity = nameInputEl.value.trim();

    if (userCity) {
        getUserWeather(userCity);

        ContainerEl.textContent = '';
        nameInputEl.value = '';
    } else {
        alert('Please enter a City!');
    }
};


var getUserWeather = function (city) {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=/' + tacoma + '/&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c';

    fetch(weatherUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response)
                response.json().then(function (data) {
                    displayWeather(data, weather);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to Open Weather');
        });
};


function getWeatherApi(request) {
    fetch(requestUrl)
        .then(function (response) {
            // Check the console first to see the response.status
            console.log(response.status);
            // Then write the conditional based on that response.status value
            // Make sure to display the response on the page
        })
        .then(function (data) {
            console.log(data);
        });
}
var badRequestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=nameunits=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c';
var tacoma = nameInputEl
var responseText = document.getElementById('response-text');
var redirectUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=/' + tacoma + '/&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c';

fetch(badRequestUrl).then(function (response) {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=/' + tacoma + '/&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c';
    if (response.status === 404) {
        fetch(weatherUrl)
            .then(function (response) {
                console.log(response.status);
            .then(function response(data) {
                    console.log(data)
                }
     else 

     .then(function (response) {
                    console.log(response.status);
        .then(function (data) {
                        console.log(data)

                        return response.json() {
                            console.log(response)

                        };

                        function getWeatherApi(request) {
                            var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=/' + tacoma + '/&units=imperial&appid=335fc46330e5a6ab7ec6dbd91233522c';
                            fetch(weathertUrl)
                                .then(function (response) {
                                    console.log(response.status);
                                })
                                .then(function (data) {
                                    console.log(data);
                                });
                        }


                        var displayWeather = function (weather, searchTerm) {
                            if (weather.length === 0) {
                                ContainerEl.textContent = 'No weather found.';
                                return;
                            }

                            citySearchTerm.textContent = searchTerm;

                            for (var i = 0; i < weather.length; i++) {
                                var repoName = weather[i].name.city + '/' + weather[i].name;

                                var cityEl = document.createElement('div');
                                cityEl.classList = 'list-item flex-row justify-space-between align-center';

                                var weatherEl = document.createElement('span');
                                weatherEl.textContent = cityName;

                                cityEl.appendChild(weatherEl);

                                var statusEl = document.createElement('span');
                                statusEl.classList = 'flex-row align-center';

                                if (weather[i].open_issues_count > 0) {
                                    statusEl.innerHTML =
                                        "<i class='fas fa-times status-icon icon-danger'></i>" + weather[i].open_issues_count + ' issue(s)';
                                } else {
                                    statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
                                }

                                weatherEl.appendChild(statusEl);

                                ContainerEl.appendChild(weatherEl);
                            }
                        };

                        searchButton.addEventListener('submit', formSubmitHandler);
