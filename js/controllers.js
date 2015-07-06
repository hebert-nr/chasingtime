//this variable (chasingTime) will have all the code for our app. This is also called Namespacing.
//its a way to protect our application code and no other script is going to interfere with our app. 
var musicController = angular.module('musicController', ['ngAnimate']);

musicController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data){
		$scope.music = data;
		$scope.songOrder = 'title'; 
	});
}]);