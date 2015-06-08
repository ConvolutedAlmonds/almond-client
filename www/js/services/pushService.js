angular.module('pushService', [])
.factory('pushService', function (Auth, AuthToken, $ionicUser, $ionicPush) {
	pushService = {}
	pushService.identifyUser = function() {
    if(Auth.isLoggedIn()) {
      console.log('Ionic User: Identifying with Ionic User service');

      var user = $ionicUser.get();
      if(!user.user_id) {
        // Set your user_id here, or generate a random one.
        user.user_id = AuthToken.getToken();
      };

      // Identify your user with the Ionic User Service
      $ionicUser.identify(user).then(function(){
        pushService.pushRegister();
        alert('Identified user ' + user.name + '\n ID ' + user.user_id);
      });
    }
  };

  pushService.pushRegister = function() {
    console.log('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        console.log(notification);
        return true;
      }
    });
  }

  return pushService;
});