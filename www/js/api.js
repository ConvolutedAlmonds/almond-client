


var authorizeUser = function(callback) {

  var client_id = "664215290683-thjone29b1n8md31t5n4aufbuansum0r.apps.googleusercontent.com";
  var redirect_uri = "http://localhost:3000/auth/google-client";
  var auth_url = "https://accounts.google.com/o/oauth2/auth";

  var login_url = auth_url + '?' + $.param({ client_id: client_id, redirect_uri: redirect_uri, scope: 'https://www.googleapis.com/auth/plus.login', response_type: 'code'});

  var loginWindow = window.open(login_url, '_blank', 'location=yes');

  setTimeout(function() {
    loginWindow.close();
  }, 2000)

};

var getRoutes = function($http, callback) {
     $.http({
       type: 'GET',
       url: serverUrl + '/api/routes'
     }).success(function(data) {
        console.log(data);
        callback(data);
     }).error(function(data) {
         console.log(data);
     })
  });

};

var getEvents = function($http, callback) {
    $http({
        type: 'GET',
        url: serverUrl + '/api/upcomingEvents',
    }).success(function(data) {
        callback(data);
        console.log(data);
    }).error(function(error) {
        console.log(error);
    });
};

var getUberEstimates = function($http, callback) {
    $http({
        type: 'GET',
        url: serverUrl + '/api/uberEstimates',
    }).success(function(data) {
        console.log(data);
        callback(data);
    }).error(function(error) {
        console.log(error);
    })