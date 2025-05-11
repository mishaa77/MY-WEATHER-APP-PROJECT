function search(event){
  event.preventDefault();
  let enterCity = document.getElementById("enter-city");
  let city = document.getElementById("current-city");
  city.innerHTML = enterCity.value;
  searchCity =enterCity.value;
   
  let apiKey = "b2a5adcct04b33178913oc335f40543";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchCity}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
  
}
    
function formatDate() {
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
let date = new Date();
let currentDate = document.getElementById('current-date');
currentDate.innerHTML = formatDate()
  

  
   
   

  
       

    
 
let formInput = document.getElementById('search-form');
formInput.addEventListener('submit',search);