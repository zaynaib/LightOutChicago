$.ajax({
    url: "https://data.cityofchicago.org/resource/h5ea-dn36.json",
    type: "GET",
    data: {
      "$limit" : 200,
      "$$app_token" : "xlhMeu5EmajOT4gWzLOTw280f"
    }
}).done(function(data) {
  //alert("Retrieved " + data.length + " records from the dataset!");
  //console.log(data);

  //collect the data from the chicago data portal
  var location = data;
  console.log(data[1].status);

 //create the map layer
  var map = L.map('map').setView([41.8338, -87.7320], 12);
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 18,
            }).addTo(map);

  //create red icon
  var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

   //loop through data points and add markers
  for (var i = 1; i < data.length; i++) {

    //extract latitude and longtiude for each street lamp
    var lat =parseFloat(location[i].latitude);
    var long =parseFloat(location[i].longitude);

  //if statement if data[i] === "Completed" then blue
    if (location[i].status ==="Completed") {
       // add markers to the map
    marker = new L.marker([lat,long])
				.addTo(map);
  }
    else{
          L.marker([lat, long], {icon: redIcon}).addTo(map);

    }

   function serviceFunction(){
       var lightStreet=  document.getElementById("chiService").value;
        var address = lightStreet.toUpperCase();

            console.log(address);

    }

    }
   serviceFunction();

  //else add red markers
  /*
    L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

  */
});//end of ajax funciton
