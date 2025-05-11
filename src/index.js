function search(event){
    event.preventDefault()
    let enterCity = document.getElementById('enter-city');
    let city = document.getElementById('current-city');
    city.innerHTML = enterCity.value;
    
}
let formInput = document.getElementById('search-form');
formInput.addEventListener('submit',search);