angular.module('almond.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $state) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.currState = $state.current.name;
  $scope.$watch(function() {
    return $state.current.name;
  }, function() {
    $scope.currState = $state.current.name;
  }, true);
  console.log($scope.currState);

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

    // navigator.app.loadUrl(uberUrl, {openExternal: true});
    var clientId = "664215290683-rv0ofoq8r51sffkujlv1garnoqrtk4s5.apps.googleusercontent.com"
    var ref = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=https://www.googleapis.com/auth/urlshortener&approval_prompt=force&response_type=code&access_type=offline', '_blank', 'location=no');
    ref.addEventListener('loadstart', function(event) {
        if((event.url).startsWith("http://localhost/callback")) {
            requestToken = (event.url).split("code=")[1];
            postAuthenticate($http, requestToken);
            alert(requestToken);
            ref.close();
        }
    });
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TravelModesCtrl', function($scope, userLocation, $rootScope, $http, $location, destinationService, $ionicLoading) {
  if(typeof destinationService.get() === 'undefined') {
    $scope.destination = {};
    $scope.destination.formatted_address = '875 Post Street, San Francisco, CA 94109, USA';
    $rootScope.userLat = 37.785834;
    $rootScope.userLong = -122.406417;
  } else {
    $scope.destination = destinationService.get();
    destinationService.listen($scope, function(newDest){
      $scope.destination = newDest;
    })
  };

  $scope.showLoading = $ionicLoading.show.bind(this,{
        template: '<span style="color:white;"><ion-spinner></ion-spinner><br>Loading routes...</span>'
      });
  $scope.hideLoading =  $ionicLoading.hide;

  // If route is from Google Directions, show step-by-step and map polyline. If Uber selection, deep link to Uber app with pre-filled fields.
  $scope.go = function ( path ) {
    var choice = this.route;
    console.log('THIS', choice);
    if (choice.uberAppUrl) {
      window.open(choice.uberAppUrl, 'system');
    } else {
      $location.path(path);
    }
  };
  
  $scope.refresh = function() {

    $scope.showLoading();
    $scope.options = {};
    getRoutes($http, $rootScope.userLong, $rootScope.userLat, $scope.destination.formatted_address, function(data){
      var formattedData = {};
      console.log('show loading')
      formattedData.data = [];
      formattedData.data.results = [];
      for(var i = 0; i < data.directions.results.length; i++) {
        var result = data.directions.results[i];
        var formattedResult = [];
        for(var j = 0; j < result.length; j++) {
          var subResult = result[j];
          var formattedSubResult = {
            travelMode: subResult.travelMode,
            fare: subResult.fare || "$0",
            distance: subResult.legs[0].distance,
            duration: subResult.legs[0].duration.text,
            summary: subResult.summary,
            durationByMode: [subResult.durationByMode[0], subResult.durationByMode[1]],
            directions: subResult.legs[0].steps
          };

          formattedResult.push(formattedSubResult);
        }
        formattedData.data.results.push(formattedResult);
      }


      var uberAppLink = 'uber://?action=setPickup' +
        '&pickup[latitude]=' + data.misc.origin.latitude.toString() +
        '&pickup[longitude]=' + data.misc.origin.longitude.toString() +
        '&pickup[formatted_address]=' + encodeURIComponent(data.misc.origin.address) +
        '&dropoff[latitude]=' + data.misc.destination.latitude.toString() +
        '&dropoff[longitude]=' + data.misc.destination.longitude.toString() + 
        '&dropoff[formatted_address]=' + encodeURIComponent(data.misc.destination.address);

      for (var i = 0; i < data.uber.length; i++) {
        var uberResult = data.uber[i];

        var formattedSubResult = {
          travelMode: uberResult.price_localized_display_name,
          fare: { text: uberResult.price_estimate },
          distance: { text: uberResult.price_distance },
          duration: uberResult.price_parsedArrivalTime,
          summary: uberResult.price_display_name,
          durationByMode: [[uberResult.price_parsedArrivalTime, 'driving']],
          directions: [],
          timeTilArrivalSec: uberResult.time_estimate, // FIX
          timeTilArrivalParsed: uberResult.time_parsedDuration, // FIX
          origin: data.misc.origin,
          destination: data.misc.destination,
          productId: uberResult.time_product_id,
          uberAppUrl: uberAppLink + '&product_id=' + uberResult.time_product_id
        };

        var formattedResult = [formattedSubResult];
        formattedData.data.results.push(formattedResult);
      }

      console.dir(formattedData);
      $scope.options = formattedData;
      $scope.$broadcast('scroll.refreshComplete');
      $scope.hideLoading();
      console.log('hide loading')
    });
  }

  $scope.refresh();


  $scope.dispatch = function(i,j) {
    console.log("dispatch called on TravelModesCtrl");
    $scope.$on('TravelMode.ReadyforData',function(){
      console.log("broadcasting data from TravelModesCtrl");
      console.log($scope.options);
      $rootScope.$broadcast('TravelModes.Data',$scope.options, i, j);
    })
  }

})

.controller('StartCtrl', function($scope, $rootScope, destinationService, $http) {

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



  getEvents($http, function(data){
    $scope.nextEvent = {
      title: data.events.items[0].summary,
      address: data.events.items[0].location
    }
  })
})

.controller('TravelModeCtrl', function($scope,$stateParams,$rootScope, destinationService, mapService) {
  $scope.activeTab = 'directions';
  var userMarker, route;
  console.log("TravelModeCtrl says hi");
  var deregister = $scope.$on('TravelModes.Data', function(e,data,i,j) {
    $scope.data = data.data.results[i][j];
    console.log("Got data from event")
    console.dir($scope.data)
  })
  $rootScope.$broadcast('TravelMode.ReadyforData');
  deregister();


  $scope.destination = destinationService.get();
  destinationService.listen($scope, function(newDest){
    $scope.destination = newDest;
  });

  var map = mapService.create('map');

  google.maps.event.addListenerOnce(map, 'idle', function(){
    var route = mapService.drawRoute(map,$scope.data);
    route.setMap(map);
  });

  $scope.$on('UserLocation.Update',function(){
    userMarker = mapService.updateUserLocation(map,$rootScope.userLat,$rootScope.userLong,$rootScope.userAccuracy, userMarker);
  })


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
