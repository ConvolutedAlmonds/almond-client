angular.module('settingsService', ['localStorageService'])

.factory('Settings', function(LocalStorage){

  if(!LocalStorage.check('travelModes')) {
    LocalStorage.set('travelModes', [
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
    ]);
  }
  
  var travelModes = LocalStorage.get('travelModes');

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

  var writeSettings = function(currentSettings) {
    LocalStorage.set('travelModes',currentSettings.travelModes);
  }

  return {
    getSettings: getSettings,
    getAllowedModes: getAllowedModes,
    writeSettings: writeSettings
  };

});
