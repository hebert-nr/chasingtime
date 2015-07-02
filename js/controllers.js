//this variable (chasingTime) will have all the code for our app. This is also called Namespacing.
//its a way to protect our application code and not other script is going to interfere with our app. 
var chasingTime = angular.module('chasingTime', []);

chasingTime.controller('MyController', function MyController($scope, $http) {
	$http.get('js/data.json').success(function(data){
		$scope.music = data;
	});
	
	
});