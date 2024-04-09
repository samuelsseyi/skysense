const apiKey = "308b780e1a7653426dc43fe146ea7ebd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("searchBox") 
const searchButton = document.getElementById("searchButton")

let time = new Date().toLocaleTimeString()
currentTime.innerHTML = time



searchButton.addEventListener("click", (e)=>{
  if (searchBox.value === "") {
    document.getElementById("errorDiv").style.display = "block"
    errorDiv.innerHTML = "Please Input city or Country Name"
    setTimeout(()=>{
      document.getElementById("errorDiv").style.display = "none"
    },3000)

  } 
  checkWeather(searchBox.value);

  async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
  
  
    console.log(data);
    document.getElementById("temp").innerHTML = `${data.main.temp}⁰c`
    document.getElementById("country").innerHTML = `${data.name}`
    document.getElementById("weatherCondition").innerHTML = data.weather[0].description
    document.getElementById("icon").innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' alt='weather img' width="80px"/>`
    document.getElementById("moreWeatherInfo").innerHTML = `
    <p class="fs-4 border-bottom text-primary p-3">Country Code: ${data.sys.country}</p>
    <p class="fs-4 border-bottom text-primary p-3">Humidity: ${data.main.humidity}% </p>
    <p class="fs-4 border-bottom text-primary p-3">Pressure: ${data.main.pressure}hPa</p>
    <p class="fs-4 border-bottom text-primary p-3">Wind Speed: ${data.wind.speed}m/s</p>
    <p class="fs-4 border-bottom text-primary p-3">Latitude: ${data.coord.lat} </p>
    <p class="fs-4 border-bottom text-primary p-3">Longitude: ${data.coord.lon} </p>
    <p class="fs-4 border-bottom text-primary p-3">Temperature: ${data.main.temp}⁰c</p>
    <p class="fs-4 border-bottom text-primary p-3">Min Temperature: ${data.main.temp_min}⁰c </p>
    <p class="fs-4 border-bottom text-primary p-3">Max Temperature: ${data.main.temp_max}⁰c </p>
    <p class="fs-4 border-bottom text-primary p-3">Description: ${data.weather[0].description}</p>
    `
  
    document.getElementById("searchBox").value = ""
  }
  
  checkWeather()
})


window.onload = function(){
  navigator.geolocation.getCurrentPosition((endConvertedResponse)=>{
    let lat = `${endConvertedResponse.coords.latitude}`
    let lon = `${endConvertedResponse.coords.longitude}`
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=308b780e1a7653426dc43fe146ea7ebd&units=metric`

    fetch(endpoint).then((convert =>{
      convert.json().then(showData=>{
        console.log(showData);
      document.getElementById("temp").innerHTML = `${showData.main.temp}⁰c`
    document.getElementById("country").innerHTML = `${showData.name}`
    document.getElementById("weatherCondition").innerHTML = showData.weather[0].description
    document.getElementById("icon").innerHTML = `<img src='http://openweathermap.org/img/w/${showData.weather[0].icon}.png' alt='weather img' width="80px"/>`
    document.getElementById("moreWeatherInfo").innerHTML = `
    <p class="fs-4 border-bottom text-primary p-3">Country Code: ${showData.sys.country}</p>
    <p class="fs-4 border-bottom text-primary p-3">Humidity: ${showData.main.humidity}% </p>
    <p class="fs-4 border-bottom text-primary p-3">Pressure: ${showData.main.pressure}hPa</p>
    <p class="fs-4 border-bottom text-primary p-3">Wind Speed: ${showData.wind.speed}m/s</p>
    <p class="fs-4 border-bottom text-primary p-3">Latitude: ${showData.coord.lat} </p>
    <p class="fs-4 border-bottom text-primary p-3">Longitude: ${showData.coord.lon} </p>
    <p class="fs-4 border-bottom text-primary p-3">Temperature: ${showData.main.temp}⁰c</p>
    <p class="fs-4 border-bottom text-primary p-3">Min Temperature: ${showData.main.temp_min}⁰c </p>
    <p class="fs-4 border-bottom text-primary p-3">Max Temperature: ${showData.main.temp_max}⁰c </p>
    <p class="fs-4 border-bottom text-primary p-3">Description: ${showData.weather[0].description}</p>
`
      })
    }))
  })
}




// Current Time Code



