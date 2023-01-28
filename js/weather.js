const API_KEY ="e3c49756e14194b0fb6ba93dcc8204a2";

function onGeoOk(position) {
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    const lat = 37.5985;
    const lon = 126.9783;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
       const weather = document.querySelector("#weather span:first-child");
       const city = document.querySelector("#weather span:last-child");
       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);