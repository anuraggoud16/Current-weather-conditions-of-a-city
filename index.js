const weather_img=document.querySelector('.imgg');
async function checkWeather(city){
    const api_key = "c9fba6d231c10add5255f2bbe5423a85";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log("ENVOKED");
    console.log(weather_data);

    document.querySelector('.t').innerHTML = `Temperature:  ${Math.round(weather_data.main.temp - 273.15)}°C`;
    document.querySelector('.w').innerHTML = `Weather:  ${weather_data.weather[0].description}`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }
}


document.querySelector('.sb').addEventListener('click', ()=>{
    var c=document.querySelector('.city').value;
    checkWeather(c);
});