(function() {
    function navFunc($scope) {
        $scope.logoImage = "images/logo_colour.png";
        $scope.navButtons = ["Home", "About Us", "Programmes", "Success Stories", "Updates", "Get Involved", "Contact us"];
        $scope.btnActive = "Home";
        $scope.updateActive = function(navButton) {
            $scope.btnActive = navButton;
            console.log($scope.btnActive);
        };
		
		$scope.carImg1 = "images/carImg1.jpg";
		$scope.carImg2 = "images/carImg2.jpg";
		$scope.carImg3 = "images/carImg3.jpg";
		$scope.carImg4 = "images/carImg4.jpg";
		$scope.carImg5 = "images/carImg5.jpg";
		$scope.carImg6 = "images/carImg6.jpg";
		$scope.carImg7 = "images/carImg7.jpg";
		$scope.carImg8 = "images/carImg8.jpg";
		$scope.carImg9 = "images/carImg9.jpg";
    }
    angular.module("app").controller("navController", navFunc);
}());