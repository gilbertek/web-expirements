(function (window, google, customaps) {
  // Styles
  var styles = [
    {
      featureType: 'all',
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#3498db'
      }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{
        color: '#27ae60'
      }]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{
        color: '#27ae60'
      }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{
        color: '#27ae60'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{
        color: '#34495e'
      }]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{
        color: '#ecf0f1'
      }]
    }


  ];


  customaps.MAP_OPTIONS = {
    center: {
      lat: 40.7731295,
      lng: -73.957734
    },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    // maxZoom: 12,
    // minZoom: 8,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },

    styles: styles,
    geocoder: true,
    cluster: false
    // cluster: {
    //   options: {
    //     style: [{
    //       url: 'http://google-maps-utility-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
    //       height: 56,
    //       width: 55,
    //       textColor: '#f00',
    //       textSize: 18
    //     },
    //     {
    //       url: 'http://google-maps-utility-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png',
    //       height: 58,
    //       width: 58,
    //     },
    //     {
    //       url: 'http://google-maps-utility-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
    //       height: 62,
    //       width: 60,
    //     }]
    //   }
    // }
  };
}(window, google, window.Customaps || (window.Customaps = {})));
