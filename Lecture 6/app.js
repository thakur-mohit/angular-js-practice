(function () {
  "use strict";

  angular
    .module("NameCalculator", [])
    .controller("NameCalculatorController", function ($scope) {
      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function () {
        var totalNameValue = calNumericForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function calNumericForString(string) {
        let totalVal = 0;
        for (var i = 0; i < string.length; i++) {
          totalVal = string.charCodeAt(i);
        }
        return totalVal;
      }
    });
})();
