angular.module("moviedb").controller("MoviesListController",
	["$scope","$log","MovieService", function($scope,$log,MovieService){
		//Scope Init
		$scope.uiState = "loading";

		$scope.model = [];

        //Controller start
        	
        MovieService.getMovies().then(
        	//promesa resuelta
        	function(response){
        		$log.log("Success:",response.data);
        		$scope.model = response.data;
        		if(response.length == 0){
	        		$scope.uiState = "blank";
	        	}else{
	        		$scope.uiState = "ideal";
	        	}

        	},
        	//promesa rechazada
        	function(response){
        		$log.log("error:",response);
        		$scope.uiState = "error";
        	}
        );
	}]

);