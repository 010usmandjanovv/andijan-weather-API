"use strict"

const date = new Date()
const elDays = document.getElementById('days')
const elDate = document.getElementById('date')
const elCityName = document.getElementById('city-name')
const elTemp = document.getElementById('temp')
const elTempImg = document.getElementById('img')
const elWeather = document.getElementById('weather')

fetch('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
    .then((res) => res.json())
    .then((data) => andijanWeather(data))

function andijanWeather(data) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let n = date.getDay()
    elDays.textContent = (days[n])
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let m = date.getMonth()
    elDate.textContent = `${date.getDate()} ${(months[m])} ${date.getFullYear()}`
    elCityName.textContent =`${data.name}, ${data.sys.country}`
    elTemp.textContent = `${Math.round(data.main.temp)} °C`
    elWeather.textContent = `${(data.weather[0].main)}`;
}