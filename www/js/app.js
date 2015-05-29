// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('almond', ['ionic', 'almond.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.start', {
      url: "/start",
      views: {
        'menuContent': {
          templateUrl: "templates/start.html",
          controller: 'StartCtrl'
        }
      }
    })
    .state('app.options', {
      url: "/options",
      views: {
        'menuContent': {
          templateUrl: "templates/options.html",
          controller: 'OptionsCtrl'
        }
      }
    })

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html",
        controller: 'MapCtrl'
      }
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html" //,
        // controller: 'MapCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
})

.directive('reverseGeocode', function () {
    return {
        restrict: 'E',
        template: '<span>Locating...</span>',
        link: function (scope, element, attrs) {
            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(attrs.lat, attrs.lng);
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        element.text(
                          results[0].address_components.filter(function(v){
                            if(
                                v.types.indexOf('street_number') !== -1 ||
                                v.types.indexOf('route') !== -1 // ||
                                // v.types.indexOf('neighborhood') !== -1 ||
                                // v.types.indexOf('sublocality_level_1') !== -1
                                ) { return true; }
                            else { return false };
                          })
                          .map(function(v){
                              return v.long_name;
                          })
                          .join(" ")
                          );
                    } else {
                        element.text('Location not found');
                    }
                } else {
                    element.text('Geocoder failed due to: ' + status);
                }
            });
        },
        replace: true
    }
})
.factory('userLocation', function($q) {
  return {
    getCoords: function() {
      var deferred = $q.defer();
      console.log("HEY FROM USERLOCATION SERVICE")
      navigator.geolocation.getCurrentPosition(function(pos) {
        if(pos) {
          deferred.resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          })
        } else {
          deferred.reject("Geolocation API didn't return coordinates :(");
        }
        });
      return deferred.promise;
    }
  };
  });
