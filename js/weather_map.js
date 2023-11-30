// Creating Map
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-96.808891, 32.779167]
});

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
    })
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
const weatherOutput = document.querySelector('#forecast')

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `id=4726206` +
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

            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-3');

            card.innerHTML = `
        <div class="card">
          <div class="card-body">
                <p class="card-text">Date: ${date.toDateString()}</p>
                <p class="card-text">Humidity: ${weather.main.humidity}</p>
                <p class="card-text">Temperature: ${weather.main.temp}</p>
                <p class="card-text">Pressure: ${weather.main.pressure}</p>
                <p class="card-text">Wind: ${weather.wind.speed}</p>
          </div>
        </div>
      `;

            forecastCardsContainer.appendChild(card);
        }
    })