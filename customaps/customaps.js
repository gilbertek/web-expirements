(function(window, google, $) {

  var Customaps = (function() {

    function Customaps (element,opts) {
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
      if (opts.cluster) {
        this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster);
      }

      if (opts.geocoder) {
        this.geocoder = new google.maps.Geocoder();
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
        var marker
            self = this;

        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }
        marker = this._creatMarker(opts);

        this._setMarker(marker);

        if (this.markerClusterer) {
          this.markerClusterer.addMarker(marker);
        }

        if (opts.events) {
          this._attachEvents(marker, opts.events);
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

        if (opts.location) {
          this.geocoder.geocode({
            address: opts.location,
            success: function(results) {
              results.forEach(function(result) {
                opts.lat = result.geometry.location.lat(),
                opts.lng = result.geometry.location.lng(),

                this.gMap.addMarker(opts);
              });
            },
            error: function(status) {
              console.log(status);
            },
          })
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

      setPanoramic: function(element, opts) {
        var panorama = new google.maps.StreetViewPanorama(element, opts);
        if (opts.events) {
          this._attachEvents(panorama, opts.events);
        }

        this.gMap.setStreetView(panorama);
      },

      geocode: function(opts) {
        this.geocoder.geocode({
          address: opts.address
        }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            console.log(results);
            opts.success.call(this, results, status);
          } else {
            console.error(status)
            opts.error.call(this, status);
          }
        });
      },

      getCurrentPosition: function(callback) {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            callback.call(this, position);
          });
        }
      },

      _on: function(opts) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e) {
          opts.callback.call(self, e, opts.obj);
        });
      },

      _attachEvents: function (obj, events) {
        var self = this;
        events.forEach(function(event){
          self._on({
            obj: obj,
            event: event.name,
            callback: event.callback
          });
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

}(window, google, jQuery));
