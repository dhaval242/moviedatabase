angular.module('myfolderApp')
  .controller('viewCtrl', function ($scope, $http,$location) {

		var path= $location.path();
        var arr=path.split("/");
        var name = arr[arr.length-1];
        //$scope.product = {'name': 'Dhaval', }
         $http.get('http://localhost:9000/api/movies/'+name)
        .success(function(data) {
          //console.log(JSON.stringify(data));
          $scope.product = data ;
          console.log(JSON.stringify($scope.product));
          });

   
	});