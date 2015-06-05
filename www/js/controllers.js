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

  var uberUrl = 'uber://?client_id=YOUR_CLIENT_ID&action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d';

  $scope.testUber = function() {
    window.open(uberUrl, 'system');
    // navigator.app.loadUrl(uberUrl, {openExternal: true});
  };


  var openUber = function() {
    // if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:@"uber://"]]) {
    //     // Do something awesome - the app is installed! Launch App.
    //     navigator.app.loadUrl(uberUrl {openExternal: true});
        
    // }
    // else {
    //     // No Uber app! Open Mobile Website.
    //     alert('No uber app found')
    // }

    navigator.app.loadUrl(uberUrl, {openExternal: true});
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    navigator.app.loadUrl(uberUrl, {openExternal: true});
  //   var clientId = "664215290683-rv0ofoq8r51sffkujlv1garnoqrtk4s5.apps.googleusercontent.com"
  //   var ref = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=http://localhost/callback&scope=https://www.googleapis.com/auth/urlshortener&approval_prompt=force&response_type=code&access_type=offline', '_blank', 'location=no');
  //   ref.addEventListener('loadstart', function(event) { 
  //       if((event.url).startsWith("http://localhost/callback")) {
  //           requestToken = (event.url).split("code=")[1];
  //           postAuthenticate($http, requestToken);
  //           alert(requestToken);
  //           ref.close();
  //       }
  //   });
  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  };
})

.controller('TravelModesCtrl', function($scope, userLocation, $rootScope, $http, $location) {
  if(typeof $rootScope.destination === 'undefined') {
    $rootScope.destination = {};
    $rootScope.destination.formatted_address = '875 Post Street, San Francisco, CA 94109, USA';
    $rootScope.userLat = 37.785834;
    $rootScope.userLong = -122.406417;
  };

  $scope.go = function ( path ) {
    $location.path( path );
  };
  
  getRoutes($http, $rootScope.userLong, $rootScope.userLat, $rootScope.destination.formatted_address, function(data){
    $scope.options = data;
    console.dir(data);
  });

  $scope.dispatch = function(i,j) {
    console.log("dispatch called on TravelModesCtrl");
    $scope.$on('TravelMode.ReadyforData',function(){
      console.log("broadcasting data from TravelModesCtrl")
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
