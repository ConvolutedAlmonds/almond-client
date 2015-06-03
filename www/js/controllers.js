angular.module('almond.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();

  };

  $scope.authorizeUser = function() {
    authorizeUser();
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TravelModesCtrl', function($scope, userLocation) {
  $scope.event = {
    title: "Onsite Interview",
    location: "944 Market Street, San Francisco",
    locationName: "Hack Reactor",
    placeId: "ChIJXd_HvYWAhYAR9tpKaPJ4aME", // google maps PlaceID
    time: 1434790800 // epoch time. we'll use moment.js on the view to format this
  }
  $scope.travelModes = [
    {
      mode: "Driving",
      travelTime: 15, // in minutes
      cost: 3 // estimated cost in USD. Gas cost? Tolls? Wear and tear?

    },
    {
      mode: "Uber",
      travelTime: 21,
      cost: 9
    }
  ]
})

.controller('StartCtrl', function($scope, $rootScope, destinationService) {

  $scope.lat = $rootScope.userLat;
  $scope.long = $rootScope.userLong;

  // this syncs our scope's 'lat' and 'long' properties with the coordinates 
  // provided by the userLocation service to the rootScope.
  $scope.$watch(function() {
    return $rootScope.userLat;
  }, function() {
    $scope.lat = $rootScope.userLat;
  }, true);
  $scope.$watch(function() {
    return $rootScope.userLong;
  }, function() {
    $scope.long = $rootScope.userLong;
  }, true);

  // destinationService

  $scope.dest = destinationService;



  getEvents(function(data){
    $scope.nextEvent = {
      title: data.events.items[0].summary,
      address: data.events.items[0].location
    }
  })
})

.controller('TravelModeCtrl', function($scope,$stateParams) {
  $scope.travelMode = {};
  $scope.travelMode.title = $stateParams.travelMode;
  $scope.activeTab = 'directions';
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    travelModes: {
      uber: {
        enabled: false,
        title: "Uber"
      },
      driving: {
        enabled: true,
        title:"Driving"
      },
      transit: {
        enabled: true,
        title: "Public Transit"
      }
    }
  }
})

.controller('MapCtrl', function($scope, $stateParams, $rootScope, destinationService) {

  $scope.destination = destinationService.get();

  $scope.myLocation;
  $scope.myAccuracyCircle;

  function updateLoc() {
    if(typeof $scope.myLocation === 'undefined') {
      $scope.myLocation = new google.maps.Marker({
        position: new google.maps.LatLng($rootScope.userLat, $rootScope.userLong),
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
      $scope.myAccuracyCircle = new google.maps.Circle({
        map: map,
        radius: $rootScope.userAccuracy,    // 10 miles in metres
        fillColor: '#add8e6',
        fillOpacity: 0.66,
        strokeColor: '#3A9FBF',
        strokeWeight: 1
      });
      $scope.myAccuracyCircle.bindTo('center', $scope.myLocation, 'position');
    } else {
      $scope.myLocation.setPosition(new google.maps.LatLng($rootScope.userLat, $rootScope.userLong));
      $scope.myAccuracyCircle.setCenter(new google.maps.LatLng($rootScope.userLat, $rootScope.userLong));
      $scope.myAccuracyCircle.setRadius($rootScope.userAccuracy);
    }
  }
  $scope.$on('UserLocation.Update',function(){
    updateLoc();
  })

  var myLatlng = new google.maps.LatLng(37.7483, -122.4367); // SF, home sweet home

  var mapOptions = {
    center: myLatlng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }]}]
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);


  displayRoute();

  function displayRoute() {
    var directionsService = new google.maps.DirectionsService();
    var start = new google.maps.LatLng($rootScope.userLat, $rootScope.userLong);
    var end = $scope.destination.formatted_address;
    var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(map); // map should be already initialized.

    var request = {
      origin : start,
      destination : end,
      travelMode : google.maps.TravelMode.DRIVING
    };
    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  $scope.map = map;
});
