angular.module('routesService', [])

.factory('Routes', function() {

  var routesFactory = {};

  // Creates formatted card from a Google Directions API route
  var GoogleRouteCard = function(routeData) {

    var googleRouteCard = {
      travelMode: routeData.travelMode,
      fare: routeData.fare || "$0",
      fareNum: (typeof routeData === "string" ? parseFloat(routeData.fare.replace("$","")) : typeof routeData.fare === "object" ? routeData.fare.value : 0  ),
      distance: routeData.legs[0].distance,
      duration: routeData.travelMode === "transit" ? Math.ceil((routeData.legs[0].arrival_time.value - Math.floor((new Date).getTime()/1000)) / 60) + "m" : routeData.duration.text,
      durationNum: routeData.travelMode === "transit" ? Math.ceil((routeData.legs[0].arrival_time.value - Math.floor((new Date).getTime()/1000)) / 60) : Math.ceil((routeData.duration.value / 60)),
      summary: routeData.summary,
      durationByMode: [routeData.durationByMode[0], routeData.durationByMode[1]],
      directions: routeData.legs[0].steps,
      lineNumber: undefined,
      transitLogo: undefined
    };

    return googleRouteCard;
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
            transitLogo = 'http:' + line.vehicle.local_icon;
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

  // Takes in Google Directions API response from server and returns array of route 'cards' to display
  routesFactory.createCards = function(directionsData, allowedModes) {

    var formattedGoogleRouteCards = [];

    // Iterate through travel categories
    for(var i = 0; i < directionsData.length; i++) {
      var travelCategory = directionsData[i];
      if (!travelCategory) break;

      // Iterate through routes contained in specific travel category
      travelCategory.forEach(function(route) {

        // Make and return cards allowed by user's settings panel
        if (allowedModes[route.travelMode]) {
          var googleRouteCard = GoogleRouteCard(route);
          var steps = route.legs[0].steps;

          addTransitDetails(googleRouteCard, steps);
          formattedGoogleRouteCards.push(googleRouteCard)
        }
      });
    }

    return formattedGoogleRouteCards;
  };

  return routesFactory;

})

.factory('Uber', function() {

  var uberFactory = {};

  // Creates deep link from Almond app to Uber app with pre-filled info
  var UberDeepLink = function(requestInfo) {

    var uberDeepLink = 'uber://?action=setPickup' +
      '&pickup[latitude]=' + requestInfo.origin.latitude.toString() +
      '&pickup[longitude]=' + requestInfo.origin.longitude.toString() +
      '&pickup[formatted_address]=' + encodeURIComponent(requestInfo.origin.address) +
      '&dropoff[latitude]=' + requestInfo.destination.latitude.toString() +
      '&dropoff[longitude]=' + requestInfo.destination.longitude.toString() +
      '&dropoff[formatted_address]=' + encodeURIComponent(requestInfo.destination.address);

    return uberDeepLink;

  };

  // Creates a formatted card from an Uber API option
  var UberCard = function(uberResult, requestInfo, uberAppUrl) {

    var uberCard = {
      travelMode: uberResult.price_localized_display_name,
      fare: { text: uberResult.price_estimate },
      fareNum: ((uberResult.price_low_estimate + uberResult.price_high_estimate) / 2),
      distance: { text: uberResult.price_distance },
      duration: Math.ceil((uberResult.price_duration + uberResult.time_estimate) / 60) + "m",
      durationNum: Math.ceil((uberResult.price_duration + uberResult.time_estimate) / 60),
      summary: uberResult.price_display_name,
      durationByMode: [[uberResult.price_parsedArrivalTime, 'driving']],
      directions: [],
      timeTilArrivalSec: uberResult.time_estimate, // FIX
      timeTilArrivalParsed: uberResult.time_parsedDuration, // FIX
      origin: requestInfo.origin,
      destination: requestInfo.destination,
      productId: uberResult.time_product_id,
      uberAppUrl: uberAppUrl
    };

    return uberCard;
  };

  // Takes in Uber API response from server and  array of route 'cards' to display
  uberFactory.createCards = function(uberData, requestInfo, allowedModes) {
    // console.dir(uberData);

    var formattedUberCards = [];

    uberData.forEach(function(uberOption) {
      if (allowedModes[uberOption.price_localized_display_name]) {

        var uberAppUrl = UberDeepLink(requestInfo) + '&product_id' + uberOption.time_product_id;
        var uberCard = UberCard(uberOption, requestInfo, uberAppUrl);
        formattedUberCards.push(uberCard)
      }
    });

    return formattedUberCards;
  };

  return uberFactory;
});
