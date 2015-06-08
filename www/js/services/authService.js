angular.module('authService', [])

// Auth factory for exchanging Google Code and checking if user is logged in
.factory('Auth', function ($http, $q, AuthToken) {
  var authFactory = {};

  var serverUrl = 'http://on-time-dev.elasticbeanstalk.com';
  // var serverUrl = 'http://10.6.31.117:3000';

  authFactory.exchangeCode = function(code) {

    $http.get(serverUrl + '/auth/code?code=' + code)
      .success(function(data){

        // console.log('success:');
        // console.dir(data);
        AuthToken.setToken(data.jwt);
        // console.log('Jwt stored!', data.jwt);

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

// Auth factory for getting and setting tokens in localStorage
.factory('AuthToken', function ($window) {
  var authTokenFactory = {};

  // retrieve token from local storage
  authTokenFactory.getToken = function() {
    return $window.localStorage.getItem('token');
  };

  // if token is passed in, save it in local storage
  // if not, clear local storage
  authTokenFactory.setToken = function(token) {
    if (token) {
      $window.localStorage.setItem('token', token);
    } else {
      $window.localStorage.removeItem('token');
    }
  }

  return authTokenFactory;

})

// Auth factory for attaching jwt tokens to $http requests
.factory('AuthInterceptor', function ($q, AuthToken) {
  var interceptorFactory = {};

  // if token exists, attaches it to header on $http requests
  interceptorFactory.request = function(config) {
    console.log(config);
    if(!config.url.startsWith(serverUrl)) {
      return config;
    }
    var token = AuthToken.getToken();

    if (token) {

      // console.log('token found: ' + token)
      config.headers['x-access-token'] = token;
      // console.dir(config.headers);
    } else {
      // console.log('token not found');
      config.headers['x-access-token'] = 'dummyToken';
    }

    return config;
  };

  // TODO: handle 403 response!
  interceptorFactory.responseError = function(response) {

    if (response.status === 403) {
      AuthToken.setToken();
      console.log('Server responded with a 403');
    }

    return $q.reject(response);
  }


  return interceptorFactory;
})