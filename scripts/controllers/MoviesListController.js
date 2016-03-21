angular.module("moviedb").controller("MoviesListController",
	["$scope", function($scope){
		$scope.name = "Joseba";
		$scope.$watch("name", function(){console.log('')})
	}]

);