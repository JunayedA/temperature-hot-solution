const API_key =`4c7214298230d0776d7c1b32e46a5e57`;
const searchTemperature =()=>{
    const city = document.getElementById('city-name').value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature =>{
    setInnerText('city',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main)
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);//setAttribute e first e ki use korbo and second e ki set korbo ta dibo.
}