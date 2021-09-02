const API_key =`4c7214298230d0776d7c1b32e46a5e57`;
const searchTemperature =()=>{
    const city = document.getElementById('city-name').value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = temperature =>{
    console.log(temperature);
}