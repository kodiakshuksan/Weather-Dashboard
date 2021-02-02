//Javascript
console.log("hello")


  
//getting Current weather 
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Tacoma&appid=335fc46330e5a6ab7ec6dbd91233522c'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

//getting Future Forecast
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=Tacoma&appid=335fc46330e5a6ab7ec6dbd91233522c'
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
        'https://api.openweathermap.org/data/2.5/onecall?lat=47.2529&lon=-122.443&exclude=hourly,daily&appid=335fc46330e5a6ab7ec6dbd91233522c'
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
  






// fetch(
//   // Explain each parameter in comments below.
//   'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
// // Parameter explanation.
// The per_page parameter will limit the results base per page.
// The state parameter r




  

      // var searchFormEl = document.querySelector('#search-form');

      // function handleSearchFormSubmit(event) {
      //   event.preventDefault();
      
      //   var searchInputVal = document.querySelector('#search-input').value;
      //   var formatInputVal = document.querySelector('#format-input').value;
      
      //   if (!searchInputVal) {
      //     console.error('You need a search input value!');
      //     return;
      //   }
      
      //   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
      
      //   location.assign(queryString);
      // }
      
      // searchFormEl.addEventListener('submit', handleSearchFormSubmit);
      

  
    












// fetch(
//   // Explain each parameter in comments below.
//   'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
// // Parameter explanation.
// The per_page parameter will limit the results base per page.
// The state parameter r


 // getting upto date future forecast connect to files
      // fetch(
      //   'http://bulk.openweathermap.org/snapshot/{BULK_FILE_NAME}?appid=335fc46330e5a6ab7ec6dbd91233522c'
      // )
      //   .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //   });

      // getting all cities connect to files
      // fetch(
      //   'http://bulk.openweathermap.org/snapshot/{BULK_FILE_NAME}?appid=335fc46330e5a6ab7ec6dbd91233522c'
      // )
      //   .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //   });

        
  // getting upto date current forecast connect to files
      // fetch(
      //   'http://bulk.openweathermap.org/snapshot/{BULK_FILE_NAME}?appid=335fc46330e5a6ab7ec6dbd91233522c'
      // )
      //   .then(function (response) {
      //     return response.json();
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //   });
