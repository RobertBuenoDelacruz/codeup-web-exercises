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
    .then(result => {
        console.log(result)

        const day = result.list;
        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]

            const date = new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());

            const time = document.createElement('div')
            const temp = document.createElement('div')

            time.innerText = date
            temp.innerText = weather.main.temp;

            weatherOutput.appendChild(time)
            weatherOutput.appendChild(temp)
        }
    })


