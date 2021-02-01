//Javascript
console.log("hello")

function getApi() {
  
  var requestUrl = 'api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid=335fc46330e5a6ab7ec6dbd91233522c';
console.log(requestUrl)
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        cityList.appendChild(listItem);
      }
    });
}

searchBtn.addEventListener('click', getApi);





//api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key335fc46330e5a6ab7ec6dbd91233522c}