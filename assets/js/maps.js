    function initMap(){
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center:{
                lat:51.563054,
                lng:0.000499
            }
        });
       let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       const locations = [
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

       const markers = locations.map(function(location,i ){
           return new google.maps.Marker({
               position:location,
               label: labels[i % labels.length]
           });
       });
const markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
    
