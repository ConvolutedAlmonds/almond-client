angular.module('authService', [])

// Auth factory for exchanging Google Code and checking if user is logged in
.factory('Auth', function ($http, $q, AuthToken) {
  var authFactory = {};

  // var serverUrl = 'http://on-time-dev.elasticbeanstalk.com';
  var serverUrl = 'http://192.168.1.4:3000';

  authFactory.exchangeCode = function(code) {

    $http.get(serverUrl + '/auth/code?code=' + code)
      .success(function(data){

        console.log('success:');
        console.dir(data);
        AuthToken.setToken(data.jwt);
        console.log('Jwt stored!', data.jwt);

    }).error(function(err) {
        console.log('error', err);
    });

  };

  authFactory.isLoggedIn = function() {
    if (AuthToken.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  return authFactory;
})

