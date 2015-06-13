angular.module('routesService', [])

.factory('Routes', function() {

  var routesFactory = {};

  routesFactory.createCards = function(directionsData, allowedModes) {
  
    var formattedData = {};
    formattedData.data = [];
    formattedData.cards = [];

    for(var i = 0; i < directionsData.length; i++) {
      var result = directionsData[i];
      var formattedResult = [];
      if (!result) break;


      for(var j = 0; j < result.length; j++) {

        var subResult = result[j];
        var steps = subResult.legs[0].steps;
        var lineNumber;
        var transitLogo;
        var somethingFound = false;

        for (var k = 0; k < steps.length; k++) {
          if (!somethingFound) {
            if (steps[k].transit_details) {
              var line = steps[k].transit_details.line;
              if (line.short_name) {
                lineNumber = line.short_name;
                somethingFound = true;
              } else {
                if (line.vehicle){
                  var vehicle = line.vehicle
                  if (vehicle.local_icon) {
                    transitLogo = 'http:' + vehicle.local_icon;
                    somethingFound = true;
                  }
                }
              }
            }
          }
        }

        var formattedSubResult = {
          travelMode: subResult.travelMode,
          fare: subResult.fare || "$0",
          fareNum: (typeof subResult === "string" ? parseFloat(subResult.fare.replace("$","")) : typeof subResult.fare === "object" ? subResult.fare.value : 0  ),
          distance: subResult.legs[0].distance,
          duration: subResult.travelMode === "transit" ? Math.ceil((subResult.legs[0].arrival_time.value - Math.floor((new Date).getTime()/1000)) / 60) + "m" : subResult.duration.text,
          durationNum: subResult.travelMode === "transit" ? Math.ceil((subResult.legs[0].arrival_time.value - Math.floor((new Date).getTime()/1000)) / 60) : Math.ceil((subResult.duration.value / 60)),            
          summary: subResult.summary,
          durationByMode: [subResult.durationByMode[0], subResult.durationByMode[1]],
          directions: subResult.legs[0].steps,
          lineNumber: undefined,
          transitLogo: undefined
        };

        if (lineNumber) {
          formattedSubResult.lineNumber = lineNumber;
        } else if (transitLogo) {
          formattedSubResult.transitLogo = transitLogo;
        }

        // only return cards allowed by user settings
        if (allowedModes[subResult.travelMode]) {
          formattedData.cards.push(formattedSubResult);
        }
      }
    }

    return formattedData;
  };

  return routesFactory;

});
