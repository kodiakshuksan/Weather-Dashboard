var userFormEl = document.querySelector('#user-form');

var weatherInputEl = document.querySelector('#username');
var cityContainerEl = document.querySelector('#repos-container');
var citySearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var userCity = userSearchCity.value.trim();
  
    if (userCity) {
      getUserWeather(userCity);
  
      cityContainerEl.textContent = '';
      weatherInputEl.value = '';
    } else {
   alert('Please enter a city');
    }
  };

var getUserWeather = function (city) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d4bc567573333fa60c6123a3e64d2761';
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCityWeather(data, city);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Open Weather API');
      });
  };
  
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayCityWeather(data.items, city);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });


var displayCityWeather = function (repos, searchTerm) {
  if (repos.length === 0) {
    cityContainerEl.textContent = 'No cities found.';
    return;
  }

  citySearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    var repoName = repos[i].owner.login + '/' + repos[i].name;

    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};

userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);

  