(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.dishesList="";
  $scope.msg= "";
  $scope.calculate = function(){
    if ($scope.dishesList.length==0){
      $scope.msg="Please enter data first!!!";
      $scope.style = {"color":"red"};
    }else{
    var arr = $scope.dishesList.split(',');
    $scope.style = {"color":"green"};
    if(arr.length<=3){$scope.msg = "Enjoy!";}
    else{$scope.msg = "Too much!";}
  }
  }
}
})();
