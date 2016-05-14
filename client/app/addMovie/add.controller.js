'use strict';

angular.module('myfolderApp')
  .controller('addCtrl', function ($scope, $http) {

   $scope.name = "Dhaval";
   $scope.onAdd = function(){
   		$http.post('/api/movies', { name : $scope.movie.title , rating : $scope.movie.rating , director : $scope.movie.director , plot: $scope.movie.plot})
		.success(function(data){
			console.log("Hurray")
			
		});
	};
});