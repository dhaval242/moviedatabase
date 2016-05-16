'use strict';

describe('Controller: viewCtrl', function () {

  // load the controller's module
  beforeEach(module('myfolderApp'));

  var viewCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://localhost:9000/api/movies/')
      .respond({'name':'Captain America'});

    scope = $rootScope.$new();
    viewCtrl = $controller('viewCtrl', {
      $scope: scope
    });
  }));

  it('gets the name of movie', function () {
    $httpBackend.flush();
    expect(scope.product.name).toBe('Captain America');
  });
});
