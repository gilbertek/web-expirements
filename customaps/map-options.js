(function (window, google, customaps) {
  customaps.MAP_OPTIONS = {
    center: {
      lat: 40.7731295,
      lng: -73.957734
    },
    zoom: 10,
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

    cluster: {
      options: {
        style: [{
          url: 'http://google-maps-utility-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
          height: 56,
          width: 55,
          textColor: '#f00',
          textSize: 18
        },
        {
          url: 'http://google-maps-utility-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png',
          height: 56,
          width: 55,
        },
        {
          url: 'http://google-maps-utility-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
          height: 56,
          width: 55,
        }]
      }
    }
  };
}(window, google, window.Customaps || (window.Customaps = {})));
