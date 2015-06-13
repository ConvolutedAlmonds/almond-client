angular.module('localStorageService', [])

.factory('LocalStorage', function(){
  var get = function(k) {
    return window.localStorage[k] ? window.localStorage[k] : undefined;
  };
  var set = function(k,v) {
    if(window.localStorage) {
      window.localStorage[k] = JSON.stringify(v);
      return true;
    } else {
      return false;
    }
  };

  return {
    get: get,
    set: set
  }
});