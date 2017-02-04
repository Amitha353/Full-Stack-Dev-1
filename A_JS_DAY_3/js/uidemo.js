var app = angular.module("uiDemoApp", ['ui.router']);

//app.config(function($stateProvider) {
////    $stateProvider.state("home", {template:"<h1>Welcome</h1>"});
//    $stateProvider.state("home", {url:"/myhome",template:"<h1>Welcome</h1>"});
//})


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('page1', 
    {
        url: "/home",
        views: {
            'partialView1':{template:"<h1>First Partial View</h1>"},
            'partialView2':{template:"<h2>Second Partial View</h2>"},
            'partialView3':{template:"<h3>Third Partial View</h3>"}
        }
    })
    $urlRouterProvider.otherwise("/home");
//    $stateProvider.state("home", {url:"/myhome",template:"<h1>Welcome</h1>"});
//    $urlRouterProvider.otherwise("/myhome");
})

app.controller("myCtrl", function($scope, $state) {
    $scope.showHome = function() {
        $state.go("home");
    }
})