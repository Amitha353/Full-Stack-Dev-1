var fact = angular.module("FactModule", ["ngResource"]);

fact.factory("menuFactory", function($resource) {

    var menuItems;
   
    var menuResource = $resource("http://localhost:2403/wsmenuitems");
    var menuResource = $resource("http://localhost:2403/wsmenuitems", {"id":"@mid"});
    
    return {
        getMenuItems: function() {
            menuItems = menuResource.query();
            return menuItems;
        },
        addNewMenuItem: function(newmenuitem) {
            menuResource.save(newmenuitem, function(response) {
                menuItems.push(response);
            }, function(err) {
                console.log("Save Error " + err);
            });
        },
        deleteMenuItem: function(idx, mid) {
            menuResource.remove({"id":mid}, function(){
                menuItems.splice(idx, 1);
            }, function() {
                console.log("Delete error");
            })
        }
    }
});

fact.factory("orderFactory", function() {
    var orderedItems = [];
    
    return {
        getOrderedItems: function() {
            return orderedItems;
        },
        addOrderedItem: function(newItem) {
            orderedItems.push(newItem);
        },
        deleteOrderedItem: function(idx) {
            orderedItems.splice(idx,1);
        } 
    }
})

 
//    var menuItems = [
//        {"code": "VG101", "name": "Palak Panner", "price": "80", "description": "Figure Licking Good Palak Paneer."},
//        {"code": "VG102", "name": "Mexican Pizza", "price": "180", "description": "Spicy Hot Pizza"},
//        {"code": "VG103", "name": "Chicken Tikka", "price": "200", "description": "Figure Licking Great Chicken Tikka."},
//        {"code": "VG104", "name": "Ice Cream", "price": "100", "description": "Feels Like Antartica"}
//    ]

//resource save ->http post function -> create or insert data; -> returns saved object;