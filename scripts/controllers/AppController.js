angular.module("moviedb").controller("AppController",
	["$scope", function($scope){
		//Model init
		$scope.model = {
			title: ""
		}

		//Scope EventListeners
		$scope.$on("OnMenuChange", function(event,data){
			$scope.model.title = data;
		});
	}]
);