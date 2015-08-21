(function(window, google, List) {

  var Customaps = (function() {

    function Customaps (element,opts) {
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
      if (opts.cluster) {
        this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster);
      }
    }

    Customaps.prototype = {
      zoom: function(level) {
        if (level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      },

      addMarker: function(opts) {
        var marker;

        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }
        marker = this._creatMarker(opts);

        this._setMarker(marker);

        if (this.markerClusterer) {
          this.markerClusterer.addMarker(marker);
        }

        if (opts.event) {
          this._on({
            obj: marker,
            event: opts.event.name,
            callback: opts.event.callback
          });
        }

        if (opts.content) {
          this._on({
            obj: marker,
            event: 'click',
            callback: function() {
              var infoWindow = new google.maps.InfoWindow({
                content: opts.content
              });

              infoWindow.open(this.gMap, marker);
            }
          });
        }
        return marker;
      },

     findBy: function(callback) {
      this.markers.find(callback)
     },
     removeBy: function(callback) {
      var self = this;
      self.markers.find(callback, function(markers) {
        markers.forEach(function (marker) {
          if (self.markerClusterer) {
            self.markerClusterer.removeMarker(marker);
          } else {
            marker.setMap(null);
          }
        });
      });
     },

      _on: function(opts) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e) {
          opts.callback.call(self, e);
        });
      },

      _creatMarker: function(opts) {
        opts.icon = 'https://d23xca4xxbd1hp.cloudfront.net/assets/marker-7185ef0f02dde5408e2b1a31bf10bb4263832a388ad9724c3e412bb52cbbd883.svg';
        opts.map = this.gMap;
        return new google.maps.Marker(opts);
      },

      _setMarker: function(marker) {
        this.markers.add(marker);
      },

    };

    return Customaps;
  }());

  Customaps.create = function(element, opts) {
    return new Customaps(element, opts);
  };

  // Attach our object namespace to the windows
  window.Customaps = Customaps;

}(window, google, List));
