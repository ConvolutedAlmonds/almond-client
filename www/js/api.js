


var authorizeUser = function(callback) {

  var client_id = "664215290683-thjone29b1n8md31t5n4aufbuansum0r.apps.googleusercontent.com";
  var redirect_uri = "http://localhost:3000/auth/google-client";
  var auth_url = "https://accounts.google.com/o/oauth2/auth";

  var login_url = auth_url + '?' + $.param({ client_id: client_id, redirect_uri: redirect_uri, scope: 'https://www.googleapis.com/auth/plus.login', response_type: 'code'});

  var loginWindow = window.open(login_url, '_blank', 'location=yes');

  loginWindow.addEventListener('loadstart', function(e) {
    console.log('loadstart event');
  })

  loginWindow.addEventListener('loadstop', function(e) {
    console.log('loadstop event');
  })

  $(loginWindow).on('loadstart', function(e) {
    console.log('Loadstart triggered')
    alert('load start triggered');
      var url = e.originalEvent.url;
      console.log('URL:', url);

      // if (code || error){
      //   loginWindow.close();

      // }
  });

  $(loginWindow).on('loadstop', function(e) {
    console.log('Loadstop triggered')
      var url = e.originalEvent.url;
      console.log('URL:', url);


      // if (code || error){
      //   loginWindow.close();

      // }
  });

  $(loginWindow).on('loaderror', function(e) {
    console.log('error');
  });

  $(loginWindow).on('exit', function(e) {
    console.log('exit');

  });

};

