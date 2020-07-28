    function initMap(){
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center:{
                lat:51.563054,
                lng:0.000499
            }
        });
       var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var locations = [
           {
               lat: 51.556491, 
               lng: -0.157542
           },
            {
               lat: 51.559732, 
               lng: 0.002795
           },
            {
               lat: 51.531559,  
               lng: -0.041300
           },
          
       ]; 

       var markers = locations.map(function(location,i ){
           return new google.maps.Marker({
               position:location,
               label: labels[i % labels.length]
           });
       });
var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
    
