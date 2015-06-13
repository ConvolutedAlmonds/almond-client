angular.module('almond.controllers', [])
.controller('TestCtrl', function($scope) {
  $scope.dummy = "dummy";
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $state, Auth, AuthToken, $cordovaInAppBrowser, $rootScope) {
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

    var clientId = "664215290683-thjone29b1n8md31t5n4aufbuansum0r.apps.googleusercontent.com";
    var myUrl =     'https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=https://www.googleapis.com/auth/calendar+profile&response_type=code&access_type=offline&prompt=select_account';

    var ref = window.open(myUrl, '_blank', 'location=yes');

    ref.addEventListener('loadstart', function(event) {

      if ((event.url).startsWith("http://localhost/callback")) {

          requestToken = (event.url).split("code=")[1];
          Auth.exchangeCode(requestToken, function() {
          });
          console.log(requestToken);
          ref.close();
        }
    });
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str){
            return this.indexOf(str) == 0;
        };
    }
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.doLogout = function() {
    console.log('logging out');
    AuthToken.setToken();
  }

})


.controller('TravelModesCtrl', function($scope, userLocation, $rootScope, $http, $location, destinationService, $ionicLoading, $filter, $ionicPopover, $ionicHistory, $cordovaAppAvailability, Settings, Routes) {
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

  // Get currently allowed settings
  var allowedModes = Settings.getAllowedModes();

  $scope.Math = window.Math;

  $scope.log = console.log;

  $scope.$watch(function() {
    return $rootScope.sortBy;
  }, function() {
    $scope.sortBy = $rootScope.sortBy;
  }, true);

  $rootScope.sortBy = 'durationNum';

  $ionicPopover.fromTemplateUrl('templates/sortPopover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.showLoading = $ionicLoading.show.bind(this,{
    template: '<span style="color:white;"><ion-spinner></ion-spinner><br>Loading routes...</span>'
  });
  $scope.hideLoading =  $ionicLoading.hide;

  // If route is from Google Directions, show step-by-step and map polyline. If Uber selection, deep link to Uber app with pre-filled fields.
  $scope.go = function ( path ) {
    var choice = this.route;
    console.log('THIS', choice);
    if (choice.uberAppUrl) {
      $cordovaAppAvailability.check('uber://')
        .then(function() {
          // is available
          window.open(choice.uberAppUrl, 'system');
        }, function () {
          window.open('https://itunes.apple.com/us/app/uber/id368677368?mt=8','system');
        });
    } else {
      $location.path(path);
    }
  };

  $scope.refresh = function() {

    $scope.showLoading();
    $scope.options = {};

    // Retrieve travel routes from server
    getRoutes($http, $rootScope.userLong, $rootScope.userLat, $scope.destination.formatted_address, function(err, data){
      
      if (err) {
        console.log('error getting routes!');
        $scope.hideLoading();
        $ionicHistory.goBack();
      } else {

        // Parse response from server to create formmated route cards
        var routeCards = Routes.createCards(data.directions.results, allowedModes);

        $scope.options = routeCards;
        $scope.$broadcast('scroll.refreshComplete');
        $scope.hideLoading();
        console.log('hide loading')
      }
     });
  };

  $scope.refresh();


  $scope.dispatch = function(route) {
    console.log("dispatch called on TravelModesCtrl");
    $scope.$on('TravelMode.ReadyforData',function(){
      console.log("broadcasting data from TravelModesCtrl");
      console.dir(route)
      $rootScope.$broadcast('TravelModes.Data', route);
    })
  }

  $scope.itemCounter = 0;

  $scope.itemColor = function() {
    var colors = ["#2C82C9","#FC6042","#60646D","#249991","#FF7416"]
    var i = $scope.itemCounter % colors.length;
    $scope.itemCounter++;
    return colors[i];
  }

})

.controller('StartCtrl', function($scope, $rootScope, destinationService, $http, $ionicUser, $ionicPush, Auth, AuthToken, pushService, $location, $cordovaSplashscreen) {
  $scope.$on('$ionicView.loaded', function() {
    ionic.Platform.ready( function() {
      if(navigator && navigator.splashscreen) setTimeout(navigator.splashscreen.hide,250);
      pushService.identifyUser();
    });
  });

   // Handles incoming device tokens
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert("Successfully registered token " + data.token);
    console.log('Ionic Push: Got token ', data.token, data.platform);
    $scope.token = data.token;
  });

  $scope.lat = $rootScope.userLat;
  $scope.long = $rootScope.userLong;

  $scope.isFirstLoad = function(str) {
    if($rootScope.firstStartLoad) {
      setTimeout(function(){ $rootScope.firstStartLoad = false; },1000);
      return str;
    } else {
      return '';
    }
  }

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

  $scope.go = function ( path ) {
    $location.path(path);
  };

  // destinationService

  $scope.dest = destinationService;



  getEvents($http, function(data){
    $scope.nextEvent = {
      title: data.events.items[0].summary,
      address: data.events.items[0].location
    }
  })
})

.controller('TravelModeCtrl', function($scope,$stateParams,$rootScope, destinationService, mapService, $ionicPopover) {
  $scope.activeTab = 'directions';
  var userMarker, accuracyCircle, route;
  console.log("TravelModeCtrl says hi");
  var deregister = $scope.$on('TravelModes.Data', function(e,data) {
    console.log("DATA!");
    // console.dir(data)
    $scope.data = data;
    console.log("Got data from event")
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

  $scope.provisionMap = function() {
    setTimeout(google.maps.event.trigger.bind(this,map, 'resize'),5);
  }

  $scope.$on('UserLocation.Update',function(){
    var result = mapService.updateUserLocation(map,$rootScope.userLat,$rootScope.userLong,$rootScope.userAccuracy, userMarker,accuracyCircle);
    userMarker = result.userMarker;
    accuracyCircle = result.accuracyCircle;
  })


})

.controller('SettingsCtrl', function($scope, Settings) {
  $scope.settings = Settings.getSettings();

})

.controller('EventCtrl', function($http, $location, $scope, $stateParams, $rootScope, destinationService, mapService, Auth) {

  $scope.selectedIndex = null

  $scope.go = function ( destination, index ) {

    if (destination && destination !== 'No location') {
      console.log('path: ' + destination);
      destinationService.update({formatted_address: destination});
      $location.path('app/travelModes');

    } else {
      $scope.selectedIndex = index;
      setTimeout(function() {
        $scope.selectedIndex = null;
      }, 500)
    }

  };

  if (Auth.isLoggedIn()) {
    console.log('user is logged in');

    getCalendarEvents($http, function(data) {
      console.log('got events');
      $scope.events = data.events;
    })

  } else {
    console.log('user is not logged in');
  }


});
