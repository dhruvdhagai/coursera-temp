(function() {
'use strict';


angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope,
                      $filter,
                      $injector){
                        $scope.text="";
  $scope.checking= function(){

    const texts=$scope.text.split(',',4);

    console.log($scope.text.trim().length);

    if($scope.text.trim().length<1){
      $scope.display="Enter food items!!";
    }
    else{
    if((texts[3])==(undefined)){
      $scope.display="Enjoy!";
    }
    else{
      $scope.display="Too Much!";
    }}

  };

}

})();
