angular.module('app').controller('footerController', ['$scope', '$window', function($scope, $window) {
    $scope.title = "Welcome to SprngWiz Assignment";
    $scope.calendar1Content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
	$scope.navigateFacebook = function(){
		$window.open("//www.facebook.com/", "popup", "width=400,height=400,left=10,top=10");
	};
	$scope.navigateGoogle = function(){
		$window.open("//www.googleplus.com/", "popup", "width=400,height=400,left=10,top=10");
	};
	$scope.navigateTwitter = function(){
		$window.open("//www.twitter.com/", "popup", "width=400,height=400,left=10,top=10");
	};
	$scope.navigateYoutube = function(){
		$window.open("//www.youtube.com/", "popup", "width=400,height=400,left=10,top=10");
	};
	$scope.navigateGmail = function(){
		$window.open("//www.gmail.com/", "popup", "width=400,height=400,left=10,top=10");
	};
	$scope.navigateLinkedin = function(){
		$window.open("//www.linkedin.com/", "popup", "width=400,height=400,left=10,top=10");
	};
}]);