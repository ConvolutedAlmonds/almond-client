describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('almond.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AppCtrl', {
            $scope: scope, 
            $ionicModal: {
                fromTemplateUrl: function(view, obj) {
                    return this;
                },
                then: function(cb) {
                    cb({ hide: function() {

                    },
                    show: function() {
                        
                    }});
                }
            },
            $timeout: function(cb, time) {
                cb();
            },
            $http: {},
            $state: {
                current: {
                    name: ''
                }
            },
            Auth: {
                exchangeCode: function(token, cb) {
                    cb();
                }
            },
            AuthToken: {
                setToken: function() {

                }
            },
            pushService: {
                identifyUser: function() {

                }
            }});
    })
    );

    // tests start here
    it('should run without errors', function() {
        scope.closeLogin();
        expect(scope.loginData).toEqual({});
    });
});