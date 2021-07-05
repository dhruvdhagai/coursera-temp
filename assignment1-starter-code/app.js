(function() {
'use strict';


angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope,
                      $filter,
                      $injector){


  $scope.checking= function(){

    const texts=$scope.text.split(',',4);

    console.log(texts[3]);

    if((texts[3])==(undefined)){
      $scope.display="Enjoy!";
    }
    else{
      $scope.display="Too Much!";
    }

  };

}

})();
