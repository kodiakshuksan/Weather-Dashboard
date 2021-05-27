console.log("hello")

//Function gets weather
// async function weather() {
//     // API call

//     let data = await fetch('http://api.openweathermap.org/data/2.5/weather?'+'&lat=20&lon=44'+'&units=metric'+'&APPID='+'d4bc567573333fa60c6123a3e64d2761');
//     console.log('inside API');
//     const res = await data.json();
//     console.log(res);
//   }
  
//   // this async function awaits for weather() to return
//   async function run() {
//     await weather();
//     console.log('last part');
//   }
  
//   //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//   // this runs first
//   weather();

  //api.openweathermap.org/data/2.5/weather?+q={city name},{state code}&appid={API key}

  

/* When user presses enter */
// const userInput = () => {
//     $("#searchButton").on("submit", (event) => {
//         event.preventDefault();
//         weatherCity();
//     })
// }
    
// $("#searchButton").on("submit", (event) => {
//     event.preventDefault();
//     weatherCity();

const userInput= (event) => {
document.getElementById("userCitySearch").value;
event.preventDefault()
document.getElementById("test").innerHTML = userInput;
}
  //Function gets weather
async function weatherCity() {
    // API call
    // const userInput= (event) => {
    //     document.getElementById("userCitySearch").value;
    // event.preventDefault()
    // // document.getElementById("test").innerHTML = userInput;
    // const cityName = document.getElementById("userCitySearch").value;
    // document.getElementById("searchButton").addEventListener("click", weatherCity);
    // event.preventDefault();
        
    


    // const userInput = (event) => {
    //     const cityName = document.getElementById("userCitySearch").value;
    //     document.getElementById("searchButton").addEventListener("click", weatherCity);
    //     event.preventDefault();
            
    //     }
    

    let data = await fetch('http://api.openweathermap.org/data/2.5/weather?&q=' + cityName + '&APPID='+'d4bc567573333fa60c6123a3e64d2761');
    console.log('inside API');
    console.log(userCitySearch.text);

    //const userInput = document.getElementById("userCitySearch").value;
    const res1 = await data.json();
    console.log(res1);
 
  }


  // this async function awaits for weather() to return
  async function run() {
    await weatherCity();
    console.log('last part');
  }
  
  // this runs first
 
  

    console.log('last part');
  