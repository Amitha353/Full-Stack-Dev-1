var dir = angular.module("myDirectives", []);

//directive must return an object
dir.directive("myDiv", function() {
    return {
        restrict: "E",
        template: "This is my First <b>Custom Directive</b>"
    }
})

//<h1 hello orgname="SG"></h1>
dir.directive("hello", function() {
    return {
        restrict: "A",
        link: function(scope, element, attr) {
            element.text("Hello Custom Directive " + attr.orgname);
        }
    }
})

dir.directive("myName", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attr) {
            element.text(attr.first+ " " +attr.last);
        }
    }
})

dir.directive("myNameIs", function() {
    return {
        restrict: "E",
        scope: true,
        template: "{{fullname}}",
        link: function(scope, element, attr) {
            scope.fullname = attr.first + " " + attr.last;
        }
    }
})

dir.directive("namer", function() {
    return {
        restrict: "A",
        scope: true,
        template: "{{fullname}}",
        link: function(scope, element, attr) {
            scope.fullname = attr.first + " " + attr.last;
        }
    }
})

dir.directive("cnamer", function() {
    return {
        restrict: "C",
        scope: true,
        template: "{{fullname}}",
        link: function(scope, element, attr) {
            scope.fullname = attr.first + " " + attr.last;
        }
    }
})