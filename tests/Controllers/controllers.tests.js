describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('almond.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('TestCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have dummy set to dummy', function(){
        expect(scope.dummy).toEqual("dummy");
    });
    it('should have dummy not set to dummy', function(){
        expect(scope.dummy).not.toEqual("1");
    });
});