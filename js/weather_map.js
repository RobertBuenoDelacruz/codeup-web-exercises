// Transition
let intro = document.querySelector(".intro");
// let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo")

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active")
            }, (idx + 1) * 200)
        });
        setTimeout(() => {
            logoSpan.forEach(() => {
                setTimeout(() => {
                    span.classList.remove("active")
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 1800)
        setTimeout(() => {
            intro.style.top = "-100vh"
        }, 1800)
    })
})


// Creating Map
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-96.808891, 32.779167]
});
map.addControl(new mapboxgl.NavigationControl());

// Creating Marker
const marker = new mapboxgl.Marker()
    .setLngLat([-96.808891, 32.779167])
    .addTo(map)

//Search Function
document.getElementById("sub").addEventListener('click', function() {
    let currentLocation = geocode(document.getElementById('search').value, MAPBOX_API)

    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
        weatherCards(result[0], result[1])
        let clearData = document.getElementById("weather-data")
        clearData.innerHTML = ''
    })
})

// Populate city in "Current City"
const currentCity = document.querySelector('button')
const cityInput = document.querySelector('input')
const cityName = document.querySelector('p')
currentCity.addEventListener('click', () => {
    const inputValue = cityInput.value
    cityName.innerHTML = `<p> Current City: ${inputValue}</p>`
})


// Code for geocode
function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        .then( data => {
            console.log(data)
            return data.features[0].center
        });
}

//Code to get weather
function weatherCards (lon, lat) {
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
    .then( data => data.json())
    .then(weatherData => {
        const forecastData = weatherData.list;

        const forecastCardsContainer = document.getElementById('weather-data');

        const day = forecastData
        console.log(day)
        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]
            const dateTime = weather.dt_txt;
            const date = new Date(dateTime);
            // const icon =
            console.log(weather)

            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-3');

            card.innerHTML = `
        <div class="card">
          <div class="card-body">
                <p class="weather-icon"><img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" /></p>
                <p class="card-text"><strong>Date</strong>: ${date.toDateString()}</p>
                <p class="card-text"><strong>Humidity</strong>: ${weather.main.humidity}</p>
                <p class="card-text"><strong>Temperature</strong>: ${weather.main.temp}</p>
                <p class="card-text"><strong>Pressure</strong>: ${weather.main.pressure}</p>
                <p class="card-text"><strong>Wind</strong>: ${weather.wind.speed}</p>
          </div>
        </div>
      `;

            forecastCardsContainer.appendChild(card);
        }
    })
}

// Weather forecast for initialized location
weatherCards(-108.19987247782704, 33.854132496836336)
