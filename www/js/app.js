// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('almond', ['ionic', 
  'almond.controllers', 
  'angularMoment', 
  'ion-google-place', 
  'ngCordova',
  'ionic.service.core',
  'ionic.service.push',
  'almond.controllers',
	'authService',
  'pushService'])
.run(function($ionicPlatform, $rootScope, userLocation) {
  if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
      return this.indexOf(str) == 0;
    };
  }
  $ionicPlatform.ready(function() {

    $rootScope.firstStartLoad = true;

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    function setRootScope(key,val) {
      $rootScope[key] = val;
    }

    function updateLoc() {
      userLocation.getCoords().then(function(coords){
        setRootScope('userLat',coords.latitude);
        setRootScope('userLong',coords.longitude);
        setRootScope('userAccuracy',coords.accuracy);
      });
    }
    updateLoc();
    setInterval(updateLoc,5000);
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
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

  .state('app.travelModes', {
    url: "/travelModes",
    views: {
      'menuContent': {
        templateUrl: "templates/travelModes.html",
        controller: 'TravelModesCtrl'
      }
    }
  })

  .state('app.travelMode', {
    url: "/travelMode/{travelMode}",
    views: {
      'menuContent': {
        templateUrl: "templates/travelMode.html",
        controller: 'TravelModeCtrl'
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
        templateUrl: "templates/settings.html",
        controller: 'SettingsCtrl'
      }
    }
  })
  .state('app.events', {
    url: "/events",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "templates/events.html",
        controller: 'EventCtrl'
      }
    },
    data: {
      requresLogin: true
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');

  // if a jwt is stored in localStorage it is automatically attached in the header of all requests
  $httpProvider.interceptors.push('AuthInterceptor');
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
.constant('angularMomentConfig', {
    preprocess: 'unix' // optional
})
.factory('userLocation', function($q, $rootScope) {
  return {
    getCoords: function() {
      var deferred = $q.defer();
      navigator.geolocation.getCurrentPosition(function(pos) {
        $rootScope.locationHealth = 0; // 0 is good, 1 is out of date, 2 is bad
        $rootScope.$broadcast('UserLocation.Update');
        deferred.resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        })
      },function(error) {
        deferred.reject("Geolocation API didn't return coordinates :(");
        if(error.code === 3 && $rootScope.userLat) { $rootScope.locationHealth = 1; }
        else { $rootScope.locationHealth = 2; }
        if(error.code && error.message) {
          console.warn('GPS error ' + error.code + ": " + error.message);
        } else {
            console.warn("GPS error: No error message. Error object below.");
            console.dir(error);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    return deferred.promise;
    }
  };
})

.factory('destinationService', function ($rootScope) {
  'use strict';
  var dest;

  var broadcast = function (dest) {
    $rootScope.$broadcast('Destination.Update', dest);
    console.log('destinationService: broadcasted')
  };

  var update = function (newDest) {
    console.log("previous value: " + dest)
    dest = newDest;
    broadcast(dest);
    console.log('destinationService: updated, new value is ' + newDest);
  };

  var listen = function ($scope, callback) {
    $scope.$on('Destination.Update', function (newDest) {
      console.log("destinationService: caught Update event")
      callback(newDest);
    });
    console.log('destinationService: listened')
  };

  var get = function () {
    return dest;
  }

  return {
    update: update,
    listen: listen,
    get: get
  };
})


.filter('shortenTime',function(){
  return function(str) {
    str = str.replace('mins','m');
    str = str.replace('mins','m');
    str = str.replace('hours','h');
    str = str.replace('hour','h');
    str = str.replace(/\s/g,'');
    return str;
  };
})

.filter('modeFilter',function(){
  return function (str) {
    if(str.toLowerCase().indexOf("uber") !== -1) {
      str = str.replace("uber","").replace("Uber","").replace("UBER","");
      str = str.toUpperCase();
      str = "uber" + str;
    } else {
      str = str.replace("SFMTA","MUNI");
    }
    return str;
  }
})

.filter('uberShorten',function(){
  return function (str) {
    if(str.toLowerCase().indexOf("uber") !== -1) {
      str = str.replace("uber","").replace("Uber","").replace("UBER","");
      str = str.toUpperCase();
      str = str.replace("BLACK","BLK");
    } else {
      return;
    }
    return str;
  }
})

// This is adapted from the implementation in Project-OSRM
// https://github.com/DennisOSRM/Project-OSRM-Web/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
.service('polylineUtilityService',function() {
 var decode = function(str, precision) {
   var index = 0,
       lat = 0,
       lng = 0,
       coordinates = [],
       shift = 0,
       result = 0,
       byte = null,
       latitude_change,
       longitude_change,
       factor = Math.pow(10, precision || 5);

   // Coordinates have variable length when encoded, so just keep
   // track of whether we've hit the end of the string. In each
   // loop iteration, a single coordinate is decoded.
   while (index < str.length) {
       // Reset shift, result, and byte
       byte = null;
       shift = 0;
       result = 0;
       do {
           byte = str.charCodeAt(index++) - 63;
           result |= (byte & 0x1f) << shift;
           shift += 5;
       } while (byte >= 0x20);
       latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
       shift = result = 0;
       do {
           byte = str.charCodeAt(index++) - 63;
           result |= (byte & 0x1f) << shift;
           shift += 5;
       } while (byte >= 0x20);
       longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
       lat += latitude_change;
       lng += longitude_change;
       coordinates.push([lat / factor, lng / factor]);
   }
   return coordinates;
 };
 return {
  decode: decode
 }
})

.service('mapService',function(polylineUtilityService){
  var create = function(id,lat,lng) {
    lat = lat || 37.7483;
    lng = lng || -122.4367;
    var mapOptions = {
      center: new google.maps.LatLng(lat,lng),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }]}]
    };
    var map = new google.maps.Map(document.getElementById(id), mapOptions);
    return map;
  };

  var drawRoute = function(map,routeData) {

    // var bounds = new google.maps.LatLngBounds();

    var points = [];

    var steps = routeData.directions, decoded;
    for (i=0;i<steps.length;i++) {
      decoded = polylineUtilityService.decode(steps[i].polyline.points);
      for (var j = 0; j < decoded.length; j++) {
        points.push(new google.maps.LatLng(decoded[j][0],decoded[j][1]));
      };
      // bounds.extend(new google.maps.LatLng(decoded[0],decoded[1]));
    }

    var options = {
      path:points,
      strokeColor: "#0000FF",
      strokeOpacity: 1.0,
      strokeWeight: 2
    };

    var route = new google.maps.Polyline(options);

    // map.fitBounds(bounds);
    return route;
  };

  var updateUserLocation = function(map,lat,lng,accuracy,userMarker) {
    userMarker = userMarker || undefined;
    if(typeof userMarker === 'undefined') {
      userMarker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map,
        title: "My Location",
        clickable: false,
        icon: {
                url: 'img/currentLocation.png',
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(25, 25),
                scaledSize: new google.maps.Size(50, 50)
              }
      });
      accuracyCircle = new google.maps.Circle({
        map: map,
        radius: accuracy,    // 10 miles in metres
        fillColor: '#add8e6',
        fillOpacity: 0.66,
        strokeColor: '#3A9FBF',
        strokeWeight: 1
      });
      accuracyCircle.bindTo('center', userMarker, 'position');
    } else {
      userMarker.setPosition(new google.maps.LatLng(lat, lng));
      accuracyCircle.setCenter(new google.maps.LatLng(lat, lng));
      accuracyCircle.setRadius(accuracy);
    }
    return {
      userMarker: userMarker,
      accuracyCircle: accuracyCircle
      }
  };
  return {
    updateUserLocation: updateUserLocation,
    create: create,
    drawRoute: drawRoute
  }
}).config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '21a5d31c',
    // The public API key all services will use for this app
    api_key: '639530a5fcb22fe6fa0e07a8186c941c9142b1ab041e80ac',
    // Set the app to use development pushes
    dev_push: true,
    gcm_id: '664215290683'
  });
  console.log("identify");
}]);

