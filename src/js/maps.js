
function initMap() {
  var customMapType = new google.maps.StyledMapType([
      {
        elementType: 'labels',
        stylers: [{visibility: 'on'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#3498db'}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';
	
  var Pilly = new google.maps.LatLng(19.455445, -70.703238);
  
  var markers = [];
  var contentString='Pilly arte y danza!';

  var map = new google.maps.Map(document.getElementById('map'), {
    center: Pilly,
    zoom: 15,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
/*
  var coordInfoWindow = new google.maps.InfoWindow();
  coordInfoWindow.setContent(createInfoWindowContent(Pilly, map.getZoom()));
  coordInfoWindow.setPosition(Pilly);
  coordInfoWindow.open(map);

  map.addListener('zoom_changed', function() {
    coordInfoWindow.setContent(createInfoWindowContent(Pilly, map.getZoom()));
    coordInfoWindow.open(map);

    */

  //Info
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: Pilly,
    label: "Pilly",
    map: map,
    title: 'Pilly Arte y danza'
  });
  markers.push(marker);
   for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
  markers[0].addListener('click',function(){
    infowindow.open(map, markers[0]);
  });

  //-------------------------------------------------------------
  //FLATS
   /* var image = 'src/img/logo-1.ico';
    var beachMarker = new google.maps.Marker({
      position: Pilly,
      map: map,
      icon: image
    });
  
  });
  */


  //-----------------------------------------------------------------
  //Set styles
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

}
/*
var TILE_SIZE = 256;
/*
function createInfoWindowContent(latLng, zoom) {
  var scale = 1 << zoom;

  var worldCoordinate = project(latLng);

  var pixelCoordinate = new google.maps.Point(
      Math.floor(worldCoordinate.x * scale),
      Math.floor(worldCoordinate.y * scale));

  var tileCoordinate = new google.maps.Point(
      Math.floor(worldCoordinate.x * scale / TILE_SIZE),
      Math.floor(worldCoordinate.y * scale / TILE_SIZE));

  return [
    'Pilly, Arte y danza',
    'LatLng: ' + latLng,
    'Zoom level: ' + zoom
  ].join('<br>');
}

// The mapping between latitude, longitude and pixels is defined by the web
// mercator projection.
function project(latLng) {
  var siny = Math.sin(latLng.lat() * Math.PI / 180);

  // Truncating to 0.9999 effectively limits latitude to 89.189. This is
  // about a third of a tile past the edge of the world tile.
  siny = Math.min(Math.max(siny, -0.9999), 0.9999);

  return new google.maps.Point(
      TILE_SIZE * (0.5 + latLng.lng() / 360),
      TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
}

*/
