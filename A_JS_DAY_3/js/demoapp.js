//2 modules -> mod1 and mod2

var mod1 = angular.module("mod1", []);

//Controller without $scope
mod1.controller("simpleController", function(){
    this.msg = "Simple Controller Message";
    this.doIt = function() {
        alert("Simple ALERT message!");
    }
})



var mod2 = angular.module("mod2", []);

mod2.controller("simpleScopeController", ['$scope',function(a) {
    a.msg1 = "Simple $scope Message";
    a.counter = 0;
    a.counter1 = 0;
    a.inc = function() {
        a.counter++;
    }
    
    document.getElementById("myButton").addEventListener("click", function() {
        a.counter++;
        a.counter1++;
        a.$apply();
        console.log("Counter " + a.counter);
    })
}])

mod2.controller("mainController", ['$scope',function($scope) {
    $scope.mainmsg = "Main Controller Message";
    
    $scope.$on("emitEvent", function(event, args) {
        $scope.mainmsg = args.emitMessage;
    })
    
    $scope.msg = "Temp";
    
    //data broadcasted must be in object notation
    $scope.broadcastData = function(msg) {
        $scope.$broadcast('broadcastEvent', {broadMessage: msg});
    }
    
}])

mod2.controller("innerController", ['$scope', function($scope) {
    
    $scope.emitData = function(msg) {
        $scope.$emit('emitEvent', {emitMessage: msg});
    }
    
    $scope.innermsg = "Inner msg";
    
    $scope.$on("broadcastEvent", function(event, args) {
        $scope.innermsg = args.broadMessage;
    })
    
}]);

//Manual Bootstrapping in the Head section
angular.element(document).ready(function() {
    //Bootstrap mod1 with id=d1
    angular.bootstrap(document.getElementById("d1"),['mod1']);
    //Bootstrap mod2 with id=d2
    angular.bootstrap(document.getElementById("d2"),['mod2'])
})