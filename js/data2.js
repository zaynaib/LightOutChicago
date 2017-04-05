//this function creates a map layer
//divID is string with the id name of the div you want to place the map at
//numerical values of the longitiude and latitude
//zoomNumber is a numerical value that places that map in a certain zoom setting
//for more on zoom levels - http://wiki.openstreetmap.org/wiki/Zoom_levels

function createMap(divID,longitude,latitude,zoomNumber){
  var map = L.map(divID).setView([longitude,latitude], zoomNumber);
  mapLink =
      '<a href="http://openstreetmap.org">OpenStreetMap</a>';
  L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 18,
      }).addTo(map);
}

function serviceFuntion(){

}
//create red icon for street lights that are broken
//default leaflet marker blue for street lights that are completed

var redIcon = new L.Icon({
iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
shadowSize: [41, 41]
});


$.ajax({
    url: "https://data.cityofchicago.org/resource/h5ea-dn36.json",
    type: "GET",
    data: {
      "$limit" : 200,
      "$$app_token" : "APP_TOKEN"
    }
}).done(function(data) {
  //alert("Retrieved " + data.length + " records from the dataset!");
  //console.log(data);

createMap('myMap',41.8338,-87.7320,10);

});//end of ajax funciton
