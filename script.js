// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.941, -72.305],
  zoom: 10,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="https://github.com/OpenDataCT/mottes">open-source code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
<!-- Load Esri Leaflet from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.0.6"></script>

    <!-- Esri Leaflet Geocoder -->
    <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.2.3/dist/esri-leaflet-geocoder.css">
    <script src="https://unpkg.com/esri-leaflet-geocoder@2.2.3"></script>



// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// create the geocoding control and add it to the map
    var searchControl = L.esri.Geocoding.geosearch().addTo(map);

    // create an empty layer group to store the results and add it to the map
    var results = L.layerGroup().addTo(map);

    // listen for the results event and add every result to the map
    searchControl.on("results", function(data) {
        results.clearLayers();
        for (var i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng));


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
