(function(window, customaps) {

  // Map options
  var mapOptions = customaps.MAP_OPTIONS,
    elmt = document.getElementById('map-canvas'),

    // Map object
    map = customaps.create(elmt, mapOptions);
    // geocoder = new google.maps.Geocoder();

  // Makers
  var marker1 = map.addMarker({
    lat: 40.746818,
    lng: -73.9841842,
    content: 'I Ruun',
    id: 2,
    events: [{
      name: 'click',
      callback: function(e, marker) {
        console.log(e);
        console.log(marker);
      }
    }],
  });

  // var marker2 = map.addMarker({
  //   lat: 40.741071,
  //   lng: -73.99303,
  //   content: 'I Live',
  // });

  // for (var i = 0; i < 100; i++) {
  //   map.addMarker({
  //     id: i,
  //     lat: 40.741071 + Math.random(),
  //     lng: -73.99303 + Math.random(),
  //   });
  // };

  // console.log(map.markers);

  // var found = map.findBy(function(marker) {
  //   if (marker.id === 2) {
  //     console.log(marker)
  //   }
  //   return marker.id === 2
  // });

  // var found = map.removeBy(function(marker) {
  //   if (marker.id === 2) {
  //     console.log(marker)
  //   }

  //   return marker;
  // });

  // map.setPanoramic(document.getElementById('pip-pano'), {
  //   position: {
  //     lat: 40.746818,
  //     lng: -73.9841842
  //   },
  //   pov: {
  //     heading: 100,
  //     pitch: 0
  //   },
  //   events: [{
  //     name: 'links_changed',
  //     callback: function(e, panorama) {
  //       console.log(panorama.getLinks());
  //     }
  //   }]
  // });
  //

  // map.geocode({
  //   location: 'Empire State Building, New York, NY',
  // });
  //
  // Geolocation
  // map.getCurrentPosition(function(pos) {
  //   console.log(pos);

  //   map.addMarker({
  //     lat: pos.coords.latitude,
  //     lng: pos.coords.longitude,
  //   });
  // });


  // Style


}(window, window.Customaps || (window.Customaps = {})));
