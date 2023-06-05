// Accessed in show.ejs

mapboxgl.accessToken = mapToken; // mapToken defined on SHOW PAGE
const map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    // style: 'mapbox://styles/joeybbox/clareeejy001y14ljrwcstfwt',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 11 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

// Adding a pin on the map
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML( // doesn't escape HTML like <%= in EJS, SECURITY!
                `<h4>${campground.title}</h4><p>${campground.location}</p>`
            )
    )
    .addTo(map)

