'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myfolderApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://localhost:9000/api/movies')
      .respond([{'name':'Captain America'},{'name':'Iron Man'}]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.products.length).toBe(2);
  });
});
