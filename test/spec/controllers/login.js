'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('tweetApp'));

  var LoginCtrl,
    mockBackend,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_, $rootScope, $location) {
    mockBackend = _$httpBackend_;
    location = $location;
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should login as a user', function () {
    scope.user = {
      name: 'test',
      password: 'test'
    };

    var user = {
      email: 'test@gmail.com',
      name: 'test',
      _id: 1
    };
    mockBackend.expectPOST('/session/new').respond(user);
    location.path('test');
    scope.login();
    expect(scope.loggedIn).toBe(false);

    mockBackend.flush();
    expect(scope.loggedIn).toBe(true);
    expect(scope.currentUser).toEqual(user);
    expect(location.path()).toEqual('/');
  });

  it('should register a new user', function() {
    scope.newUser = {
      name: 'testing',
      password: 'testing',
      email: 'test@test.com'
    };
    var user = {
      _id: '2',
      name: 'testing',
      email: 'test@test.com'
    };
    mockBackend.expectPOST('/api/users').respond(user);
    location.path('test');
    scope.register();

    expect(scope.user).toBeUndefined();
    mockBackend.flush();
    expect(angular.equals(scope.user, user)).toBe(true);
    expect(scope.isNotRegistered).toBe(false);
    expect(location.path()).toEqual('/login');
  });
});
