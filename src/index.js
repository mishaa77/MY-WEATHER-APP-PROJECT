
function displayTemp(response){
  let tempElement = document.getElementById('current-temp')
  tempElement.innerHTML = Math.round(response.data.temperature.current)
  let city = document.getElementById("current-city");
 let humidity = document.getElementById('hum');
 let weatherDescription =document.getElementById('description');
 let wind = document.getElementById('wind');
 let currentDate = document.getElementById("current-date");
 let date = new Date(response.data.time *1000);

 city.innerHTML = response.data.city;
 weatherDescription.innerHTML = 
   response.data.condition.description
 ;
 humidity.innerHTML= `${response.data.temperature.humidity}%`;
 wind.innerHTML= `${response.data.wind.speed}km/h`;
 currentDate.innerHTML = formatDate(date);

}

function searchCity(city){
  
  let apiKey = "900fe54a2dcb23943o88ct0a1d192e13";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);

}


function search(event){
  event.preventDefault();
  let enterCity = document.getElementById("enter-city");
  
  searchCity(enterCity.value);
}
    
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
 

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
  
}



   

    
 
let formInput = document.getElementById('search-form');
formInput.addEventListener('submit',search);

searchCity('paris')