(function() {
'use strict';


angular.module('DIApp',[])

.controller('DIController',DIController)

DIController.$inject=['$scope','$filter'];

function DIController($scope,
                      $filter,
                      $injector){

  $scope.name="Dhruv";

  $scope.stateOfBeing="dp";

  $scope.upper= function(){
    var upCase= $filter('uppercase');
    $scope.name= upCase($scope.name);
  };

  $scope.feedDhruv=function(){
    $scope.stateOfBeing="24813";
  };


}

})();
