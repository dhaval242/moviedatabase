'use strict';

angular.module('myfolderApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view/:name', {
        templateUrl: 'app/viewMovie/view.html',
        controller: 'viewCtrl'
      });
  });