angular.module('routesService', [])

.factory('Routes', function() {

  var routesFactory = {};

  // Creates formatted card from a Google Directions API route
  var RouteCard = function(subResult) {

    var card = {
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

    return card;
  };

  // If a card is from the transit/public transporation category, add additional bus/train, etc info
  var addTransitDetails = function(card, steps) {
    var lineNumber;
    var transitLogo;
    var transitLineFound = false;

    steps.forEach(function(step) {
      if (!transitLineFound && step.transit_details) {
        var line = step.transit_details.line;
        if (line.short_name) {
          lineNumber = line.short_name;
          transitLineFound = true;
        } else {
          if (line.vehicle && line.vehicle.local_icon) {
            transitLogo = 'http:' + vehicle.local_icon;
            transitLineFound = true;
          }
        }
      }
    });

    if (lineNumber) {
      card.lineNumber = lineNumber;
    } else if (transitLogo) {
      card.transitLogo = transitLogo;
    }
  };

  // Takes in Google Directions API response from server and returns object with attached array of route 'cards' to display
  routesFactory.createCards = function(directionsData, allowedModes) {

    var formattedData = {};
    formattedData.cards = [];

    // Iterate through travel categories
    for(var i = 0; i < directionsData.length; i++) {
      var travelCategory = directionsData[i];
      if (!travelCategory) break;

      // Iterate through routes contained in specific travel category
      travelCategory.forEach(function(route) {

        // Make and return cards allowed by user's settings panel
        if (allowedModes[route.travelMode]) {
          var card = RouteCard(route);
          var steps = route.legs[0].steps;

          addTransitDetails(card, steps);
          formattedData.cards.push(card)
        }
      });
    }

    return formattedData;
  };

  return routesFactory;

});
