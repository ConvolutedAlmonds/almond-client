describe('Controllers', function(){
    var scope, AuthToken;

    // load the controller's module
    beforeEach(module('almond.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        console.log(scope);
        AuthToken = {
            setToken: function() {

            }
        }
        $controller('AppCtrl', {
            $scope: scope, 
            $ionicModal: {
                fromTemplateUrl: function(view, obj) {
                    return this;
                },
                then: function(cb) {
                    cb(
                    { hide: function() {

                    },
                    show: function() {

                    }
                });
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
            AuthToken: AuthToken,
            pushService: {
                identifyUser: function() {

                }
            },
            $cordovaInAppBrowser: {},
            $rootScope: scope
        });
        })
    );

    // tests start here
    it('should call modal hide from closeLogin', function() {
        spyOn(scope.modal, 'hide');
        scope.closeLogin();
        expect(scope.modal.hide).toHaveBeenCalled();
    });

    it('should call modal show from login', function() {
        spyOn(scope.modal, 'show');
        scope.login();
        expect(scope.modal.show).toHaveBeenCalled();
    });

    it('should call setToken from doLogout', function() {
        spyOn(AuthToken, 'setToken');
        scope.doLogout();
        expect(AuthToken.setToken).toHaveBeenCalled();
    });
});