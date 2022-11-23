function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 82.8628, lng: 135.0},
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 82.8628, lng: 135.0},
    map: map,
  });
}
