// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.767068, -72.716280],
  zoom: 13,
  scrollWheelZoom: false
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/leaflet-map-polygon-click">open-source code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census</a>');

// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// Get your own free Mapzen search API key and see geocoder options at https://github.com/mapzen/leaflet-geocoder
L.control.geocoder('mapzen-r6S4yi3').addTo(map);

L.control.scale().addTo(map);

// place a default blue marker on map
// L.marker([41.767068, -72.716280]).addTo(map);

// Edit file name of the GeoJson map data to be uploaded from your local directory
//$.getJSON("opp-index-2014.geojson", function (data) {
  //var geoJsonLayer = L.geoJson(data, {
   // style: function (feature) {
    //  var fillColor,
    //    level = feature.properties.level2014;
     // if (level == "Very Low") fillColor = "#fff5cc";
     // else if (level == "Low") fillColor = "#ffdb94";
      //else if (level == "Moderate") fillColor = "#ffb84d";
     // else if (level == "High") fillColor = "#ff9933";
     // else if (level == "Very High") fillColor = "#ff7519";
     // else fillColor = "gray"; // no data
     // return {
     //   'color': 'gray',
      //  'weight': 2,
     //   'opacity': 1,
     //   'dashArray': 3,
     //   'fillColor': fillColor,
     //   'fillOpacity': 0.8
     // }
  //  },
  //   onEachFeature: function( feature, layer) {
//      var popupText = "Town: <b>" + feature.properties.town + "</b>" + "<br>Tract: <b>" + feature.properties.tract2010 + "</b>"
      //   + "<br>Opportunity Level: <b>" + feature.properties.level2014 + "</b>";
    //  layer.bindPopup(popupText);
  //  }
//  }).addTo(map);
});
