const video = document.getElementById('myVideo');

const changeSpeed = (speed) =>
{
    video.playbackRate = speed;
}

changeSpeed(0.5);


// Weather Settings
const apiKey = 'e6c079df26f0e54b5c3bb4140fabc758';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const checkWeather = async (city) => 
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404)
    {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else
    {   
        
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity+ '%';
        document.querySelector('.wind').innerHTML = data.wind.speed+' km/h';
    
        if(data.weather[0].main == 'Clouds')
        {
            weatherIcon.src = 'media/img/clouds.png'
        }
        else if(data.weather[0].main == 'Clear')
        {
            weatherIcon.src = 'media/img/clear.png'
        }
        else if(data.weather[0].main == 'Rain')
        {
            weatherIcon.src = 'media/img/rain.png'
        }
        else if(data.weather[0].main == 'Drizzle')
        {
            weatherIcon.src = 'media/img/drizzle.png'
        }
        else if(data.weather[0].main == 'Mist')
        {
            weatherIcon.src = 'media/img/mist.png'
        }
        else if(data.weather[0].main == 'Snow')
        {
            weatherIcon.src = 'media/img/snow.png'
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

   
}

searchBtn.addEventListener('click', () =>
{
    checkWeather(searchBox.value);
});
