// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.941, -72.305],
  zoom: 10,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="https://github.com/OpenDataCT/mottes">open-source code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');

// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// Get your own free Mapzen search API key and see geocoder options at https://github.com/mapzen/leaflet-geocoder
L.control.geocoder('mapzen-r6S4yi3').addTo(map);

L.control.scale().addTo(map);

// place a default blue marker on map
// L.marker([41.767068, -72.716280]).addTo(map);

// point to geojson
  $.getJSON("mottes20.geojson", function (data) {   // insert pathname to your local directory file
    var geoJsonLayer = L.geoJson(data, {
      style: function (feature) {
        return {
          'color': 'red',
          'weight': 2,
          'fillColor': 'red',
          'fillOpacity': 0.3
        }
      },

  //   onEachFeature: function( feature, layer) {
//      var popupText = "Town: <b>" + feature.properties.town + "</b>" + "<br>Tract: <b>" + feature.properties.tract2010 + "</b>"
      //   + "<br>Opportunity Level: <b>" + feature.properties.level2014 + "</b>";
    //  layer.bindPopup(popupText);
  //  }
  }).addTo(map);
 });
