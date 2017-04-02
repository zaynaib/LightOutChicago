$.ajax({
    url: "https://data.cityofchicago.org/resource/h5ea-dn36.json",
    type: "GET",
    data: {
      "$limit" : 2,
      "$$app_token" : APP_TOKEN
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  //console.log(data);
  var location = data;
    //console.log(location[1].latitude);
    //console.log(location[1].longitude);
    var lat =parseFloat(location[1].latitude);
    var long =parseFloat(location[1].longitude);
    console.log(lat);
    console.log(long);
  
  
   var map = L.map('map').setView([41.8338, -87.7320], 12);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 18,
            }).addTo(map);
  var marker = L.marker([lat, long]).addTo(map);
  

});

