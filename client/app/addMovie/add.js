'use strict';

angular.module('myfolderApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/add', {
        templateUrl: 'app/addMovie/add.html',
        controller: 'addCtrl'
      });
  });