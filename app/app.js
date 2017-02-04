angular.module("myApp", []).controller("testCtrl", 
  function($scope) {
    $scope.counter = 0;
    $scope.incrementCounter = function() {
        $scope.counter++;
    }
})