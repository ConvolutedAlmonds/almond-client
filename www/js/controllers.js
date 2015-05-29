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

.controller('OptionsCtrl', function($scope, userLocation) {
  $scope.event = {
    title: "Onsite Interview",
    location: "944 Market Street, San Francisco",
    locationName: "Hack Reactor",
    placeId: "ChIJXd_HvYWAhYAR9tpKaPJ4aME", // google maps PlaceID
    time: 1434790800 // epoch time. we'll use moment.js on the view to format this
  }
  $scope.options = [
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

.controller('StartCtrl', function($scope, userLocation) {
  // put dummy data here!
  userLocation.getCoords().then(function(coords){
    $scope.lat = coords.latitude;
    $scope.long = coords.longitude;
  });
})

.controller('MapCtrl', function($scope, $stateParams, userLocation) {
  userLocation.getCoords().then(function(coords){
    $scope.lat = coords.latitude;
    $scope.long = coords.longitude;
    map.setCenter(new google.maps.LatLng(coords.latitude, coords.longitude));
    var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(coords.latitude, coords.longitude),
        map: map,
        title: "My Location"
    });
    displayRoute()
  })

      var myLatlng = new google.maps.LatLng(37.7483, -122.4367); // SF, home sweet home
  
      var mapOptions = {
          center: myLatlng,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
      };
  
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  

      function displayRoute() {
          var directionsService = new google.maps.DirectionsService();
          console.log("dR sees : " + $scope.lat + " " + $scope.long);
          console.log(typeof $scope.lat);
          var start = new google.maps.LatLng($scope.lat, $scope.long);
          var end = new google.maps.LatLng(37.3000, -120.4833);
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
