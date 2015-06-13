angular.module('settingsService', ['localStorageService'])

.factory('Settings', function(LocalStorage){

  
  var travelModes = LocalStorage.check('travelModes') ? LocalStorage.get('travelModes') : [
    { type: "driving",
      enabled: true,
      title:"Drive"
    },
    { type: "walking",
      enabled: true,
      title: "Walk"
    },
    { type: "bicycle",
      enabled: true,
      title: "Bicycle"
    },
    { type: "transit",
      enabled: true,
      title: "Public Transit"
    },
    { type: "uberX",
      enabled: true,
      title : "UberX"
    },
    { type: "uberXL",
      enabled: true,
      title: "UberXL"
    },
    { type: "UberBLACK",
      enabled: true,
      title: "UberBlack"
    },
    { type: "UberSUV",
      enabled: true,
      title: "UberSUV"
    }
  ];

  // Returns current settings
  var getSettings = function() {
    var currentSettings = { travelModes: travelModes };
    return currentSettings;
  }

  // Returns object with currently enabled travel modes
  var getAllowedModes = function() {

    var allowedModes = {};

    travelModes.forEach(function(mode) {
      if (mode.enabled){
        allowedModes[mode.type] = true;
      }
    })

    return allowedModes;
  };

  return {
    getSettings: getSettings,
    getAllowedModes: getAllowedModes
  };

});
