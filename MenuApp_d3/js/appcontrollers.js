var myApp = angular.module("ctrlModule", ['svcServices'])

myApp.config(function() {
    console.log("2_ My App Config")
})

myApp.run(function() {
    console.log("2_ My App Run")
})

//Define a controller
myApp.controller('menuController', function($scope, menuService, orderService) {
    console.log("This is a Menu Controller")
    
//    var msg = "SG, Bangalore";
    $scope.msg = "SG, Bangalore";
//    
//    $scope.menuItem = {"code": "VG101", "name": "Palak Panner", "menuItem": "$80", "description": "Figure Licking Good Palak Paneer."}
      
    $scope.itemsList = menuService.getAllMenuItems();
    
    $scope.placeOrder = function(item) {
        var orderItem = {name: item.name, price:item.price, qty:1}
        orderService.addOrder(orderItem);
    }
    
    $scope.save = function() {
        menuService.addMenuItem($scope.newmenuitem);
        $scope.newmenuitem = {}
    }
    
    $scope.remove = function(idx, mid) {
        menuService.deleteMenuItem(idx, mid);
    }
    
    $scope.edit = function(menuItem) {
        $scope.newmenuitem = angular.copy(menuItem);
    }
})

myApp.controller('orderController', function($scope, orderService) {
    $scope.myOrders = orderService.getAllOrders();
    
    $scope.cancelOrder = function(idx) {
        orderService.deleteOrder(idx);
    }
    
    $scope.totalAmount = function() {
       return orderService.getTotalAmount();
    }
})