'use strict';

angular.module('myfolderApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.products = [];
    $scope.name = 'Dhaval';
    $http.get('http://localhost:9000/api/movies')
        .success(function(data) {
            
            $scope.products = data;
          
          })

    
    $scope.onSearch=function(){
        console.log($scope.search);       
        
        $http.get('http://localhost:9000/api/movies/'+$scope.search)
        .success(function(data) {
          if (data.length === 0){
            console.log("Not Found");
          }
          else{
            console.log("Success");
          }
          
        });
    }

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/movies', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
    
    

  });

  

var movies = [
{
	name:'Dhaval',
	rating:'7',
	description:'bchdbsckcd cjsdbcj',
  url:'assets/images/download.jpg'
},
{
	name:'Dhaval1	',
	rating:'10',
	description:'bchdbsckcd cjsdbcj',
  url:'assets/images/yeoman.png'
}
]
