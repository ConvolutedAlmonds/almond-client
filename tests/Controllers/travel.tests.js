describe('Travel Modes Controller', function(){
    var scope, AuthToken, userLocation, rootScope, http, location, destinationService = {}, ionicLoading, filter;
    var getRoutes = function() {

    }
    destinationService.get = function() {

    }
    // load the controller's module
    beforeEach(module('almond.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        AuthToken = {
            setToken: function() {

            }
        }
        $controller('TravelModesCtrl', {
            $scope: scope, 
            userLocation: userLocation,
            $rootScope: rootScope,
            $http: http,
            destinationService: destinationService,
            $ionicLoading: ionicLoading,
            $filter: filter
        });
    }));
    // tests start here
    xit('should have refresh', function() {
        //expect(scope.refresh).toExist();
    });
});