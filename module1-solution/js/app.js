(function() {
  'use strict';

   angular.module("LunchCheck",[])
   .controller("LunchCheckController", LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {

   	  	$scope.btn_click = function () {
            
            $scope.a = $scope.name;
            $scope.d = []; 
            
   	  		if(typeof $scope.a !== "undefined") {

   	  			if($scope.a.split("").length !== 0) {

	                $scope.a =  $scope.a.split(",");
			   		
			   		angular.forEach($scope.a, function(value, key) {

			   			if(value.trim().split("").length !== 0) {  $scope.d.push(value); }			   			
				       
					});
		
			   		if($scope.d.length <= 3) {

			   			$scope.msgOutput = "Enjoy!"; 
			   			$scope.color = "green";

			   		}

			   		if($scope.d.length > 3) {

			   			$scope.msgOutput = "Too much!";
			   			$scope.color = "green";

			   		}

		   	   }else {
		   	   	$scope.msgOutput = "Empty!";
		   	   	$scope.color = "red";
		   	   }



   	  		}else {
   	  			$scope.msgOutput = "Please enter data first!";
   	  			$scope.color = "red";
   	  		}//end

	   		

	   	};//scope

   }//controller func


})();