'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('tweetApp'));

  var NavCtrl,
    location,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should active this navtab', function () {
    location.path('/timeline');
    expect(scope.isActive('/timeline')).toBe(true);
    location.path('/');
    expect(scope.isActive('/timeline')).toBe(false);
  });
});
