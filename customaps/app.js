(function(window, customaps) {

  // Map options
  var mapOptions = customaps.MAP_OPTIONS,
  elmt = document.getElementById('map-canvas'),

  // Map object
  map = customaps.create(elmt, mapOptions);
  // console.log(map.zoom());

  // Events
  // map._on('click', function(e) {
  //   console.log(e);
  //   console.log(this);
  // });

  // Makers
  var marker1 = map.addMarker({
    lat: 40.746818,
    lng: -73.9841842,
    content: 'I Ruun',
    id: 2,
    event: {
      name: 'click',
      callback: function() {
        alert("I am clicked");
      }
    }
  });

  var marker2 = map.addMarker({
    lat: 40.741071,
    lng: -73.99303,
    content: 'I Live',
  });

  for (var i = 0; i < 100; i++) {
    map.addMarker({
      id: i,
      lat: 40.741071 + Math.random(),
      lng: -73.99303 + Math.random(),
    });
  };

  // console.log(map.markers);

  var found = map.findBy(function(marker) {
    if (marker.id === 2) {
      console.log(marker)
    }
    return marker.id === 2
  });

  // var found = map.removeBy(function(marker) {
  //   if (marker.id === 2) {
  //     console.log(marker)
  //   }

  //   return marker;
  // });

}(window, window.Customaps || (window.Customaps = {})));
