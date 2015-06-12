angular.module('settingsService', [])

.factory('Settings', function(){

  var settingsFactory = {};

  var travelModes = {
    driving: {
      enabled: true,
      title:"Drive"
    },
    walking: {
      enabled: true,
      title: "Walk"
    },
    bicycle: {
      enabled: true,
      title: "Bicycle"
    },
    transit: {
      enabled: true,
      title: "Public Transit"
    },
    uberX: {
      enabled: true,
      title: "UberX"
    },
    uberXL: {
      enabled: false,
      title: "UberXL"
    },
    uberBLACK: {
      enabled: false,
      title: "UberBlack"
    },
    uberSUV: {
      enabled: false,
      title: "UberSUV"
    }
  };

  settingsFactory.getSettings = function() {
    var currentSettings = { travelModes: travelModes };
    return currentSettings;
  }

  settingsFactory.getAllowedModes = function() {

    var allowedModes = {};

    for (var mode in travelModes) {
      if (travelModes[mode].enabled){
        allowedModes[mode] = true;
      }
    }

    return allowedModes;
  };

  return settingsFactory;

});