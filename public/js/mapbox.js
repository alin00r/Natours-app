/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWxpbm91cjIwMDMiLCJhIjoiY2xueGFsZTNoMGo5bjJtbXhtdG45cWZ3ZyJ9.kAyzfmxCnv94qp5dDJ3mYw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alinour2003/clnxev31w007f01qmgovuemit',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();
  const coords = []; // Create an array to store route coordinates

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);

    // Add coordinates to the route
    coords.push(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
    maxZoom: 10,
  });

  map.on('load', () => {
    map.addSource('route', {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coords, // Use the route coordinates array
        },
      },
    });
    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#28b487',
        'line-width': 3,
      },
    });
  });
};
