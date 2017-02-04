describe("Controller test", function(){
    
    var scope;
    
    beforeEach(angular.mock.module("myApp"));
    
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller("testCtrl", {$scope: scope});
    }))
    
    it('should define a scope variable', function() {
        expect(scope.counter).toBeDefined();
    })
    
    it("initialize with zero", function() {
        expect(scope.counter).toEqual(0);
    })
    
    it("increment function", function() {
        scope.incrementCounter();
        expect(scope.counter).toEqual(1);
    } )
})