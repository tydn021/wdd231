const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const currentDesc = document.querySelector('#description');
const currentHigh = document.querySelector('#high');
const currentLow = document.querySelector('#low');
const currentHumidity = document.querySelector('#humidity');
const forecast = document.querySelector('#forecast-data');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.68&lon=-117.24&units=imperial&appid=91565049fb0a394c1fac070e35e1cea3';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.68&lon=-117.24&units=imperial&appid=91565049fb0a394c1fac070e35e1cea3';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

async function forecastFetch() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

forecastFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  let high = data.main.temp_max;
  let low = data.main.temp_min;
  let humid = data.main.humidity;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  currentDesc.innerHTML = `${desc}`;
  currentHigh.innerHTML = `${high}`;
  currentLow.innerHTML = `${low}`;
  currentHumidity.innerHTML = `${humid}`;
}

function displayForecast(data) {
    let threeDays = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0,3);
    forecast.innerHTML = "";
    threeDays.forEach(day => {
        let date = new Date(day.dt * 1000);
        let dayName = date.toLocaleDateString('en-us', {weekday:'short'});
        let p = document.createElement('p');

        p.innerHTML = `${dayName}: ${day.main.temp.toFixed(0)}°F`;
        forecast.appendChild(p);
    })

}