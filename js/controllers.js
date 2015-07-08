//this variable (chasingTime) will have all the code for our app. This is also called Namespacing.
//its a way to protect our application code and no other script is going to interfere with our app. 
var musicController = angular.module('musicController', ['ngAnimate']);

musicController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data){
		$scope.music = data;
		$scope.songOrder = 'title'; 
	});
}]);

musicController.controller('DetailedController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data){
	 $scope.music = data;
	 $scope.whichItem = $routeParams.itemId; //This is a variable (whichItem) that allows the routeParams to get the url and any data being passed to it.
	
	//this checks to see which is the first and last items, and if they are, you can nav forward or back respectively.
	if ($routeParams.itemId > 0){
		$scope.prevItem = Number($routeParams.itemId)-1;//$routeParams come in as a String so we must cast it to a number
	} else{
		$scope.prevItem = $scope.music.length-1;
	}
	
	if ($routeParams.itemId < $scope.music.length-1){
		$scope.nextItem = Number($routeParams.itemId)+1; //casting to a number
	} else{
		$scope.nextItem = 0;
	}
  });
}]);