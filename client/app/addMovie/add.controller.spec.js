'use strict';

describe('Controller: addCtrl', function () {

  // load the controller's module
  beforeEach(module('myfolderApp'));

  var addCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend
              .when('POST', 'http://localhost:9000/api/movies/', { 
                name: 'Bat Man',
              })
              .respond({ 
                name: 'Bat Man'
              });

    scope = $rootScope.$new();
    addCtrl = $controller('addCtrl', {
      $scope: scope
    });
  }));

  it('add a movie', function () {
    //$httpBackend.flush();
    expect(scope.movie).toBe({name : 'Bat Man'});
  });
});