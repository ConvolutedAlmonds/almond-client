angular.module('localStorageService', [])

.factory('LocalStorage', function(){
  var get = function(k) {
    return JSON.parse(window.localStorage[k]);
  };

  var set = function(k,v) {
    if(window.localStorage) {
      window.localStorage[k] = JSON.stringify(v);
      return true;
    } else {
      return false;
    }
  };

  var check = function(k) {
    return !(typeof window.localStorage[k] === 'undefined');
  }

  return {
    get: get,
    set: set,
    check: check
  }
});