'use strict';

describe('Controller: LogoutCtrl', function () {

  // load the controller's module
  beforeEach(module('tweetApp'));

  var LogoutCtrl,
    mockBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    mockBackend = _$httpBackend_;
    scope = $rootScope.$new();
    LogoutCtrl = $controller('LogoutCtrl', {
      $scope: scope
    });
  }));

  it('should logout', function () {
    mockBackend.expectDELETE('/session/destroy');
    //scope.logout();
    expect(scope.loggedIn).toBe(false);
    expect(scope.currentUser).toBe(null);
  });
});
