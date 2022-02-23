(function () {
  "use strict";
  var x = 10;
  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "Mohit";
      $scope.sayHello = function () {
        return "Hello Coursera";
      };
    });
})();
