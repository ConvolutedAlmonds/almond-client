angular.module('almond.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
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

.controller('TravelModesCtrl', function($scope, userLocation, $rootScope, $http, $location, destinationService) {
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

  $scope.go = function ( path ) {
    $location.path( path );
  };
  
  getRoutes($http, $rootScope.userLong, $rootScope.userLat, $scope.destination.formatted_address, function(data){
    var formattedData = {};

    formattedData.data = [];
    formattedData.data.results = [];
    for(var i = 0; i < data.data.results.length; i++) {
      var result = data.data.results[i];
      var formattedResult = [];
      for(var j = 0; j < result.length; j++) {
        var subResult = result[j];
        var formattedSubResult = {}
        formattedSubResult.travelMode = subResult.travelMode;
        formattedSubResult.fare = subResult.fare || "$0";
        formattedSubResult.distance = subResult.legs[0].distance;
        formattedSubResult.duration = subResult.legs[0].duration.text;
        formattedSubResult.summary = subResult.summary;
        formattedSubResult.durationByMode = [subResult.durationByMode[0], subResult.durationByMode[1]];
        formattedSubResult.directions = subResult.legs[0].steps;
        formattedResult.push(formattedSubResult);
      }
      formattedData.data.results.push(formattedResult); 
    }
    console.dir(formattedData);
    $scope.options = formattedData;
  });

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

.controller('TravelModeCtrl', function($scope,$stateParams,$rootScope) {
  $scope.activeTab = 'directions';
  console.log("TravelModeCtrl says hi");
  var deregister = $scope.$on('TravelModes.Data', function(e,data,i,j) {
    $scope.data = data.data.results[i][j];
    console.log("Got data from event")
  })
  $rootScope.$broadcast('TravelMode.ReadyforData');
  deregister();
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

.controller('MapCtrl', function($scope, $stateParams, $rootScope, destinationService, mapService) {

  $scope.destination = destinationService.get();
  destinationService.listen($scope, function(newDest){
    $scope.destination = newDest;
  });

  var map = mapService.create('map');

  $scope.$on('UserLocation.Update',function(){
    mapService.updateUserLocation($rootScope.userLat,$rootScope.userLong,$rootScope.userAccuracy)
  })


  mapService.drawRoute($rootScope.userLat,$rootScope.userLong,$scope.destination.formatted_address);
});
