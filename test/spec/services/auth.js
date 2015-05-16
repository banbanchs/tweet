'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('tweetApp'));

  // instantiate service
  var auth, mockBackend, rootScope, location;
  beforeEach(inject(function (_auth_, _$httpBackend_, $rootScope, $location) {
    auth = _auth_;
    mockBackend = _$httpBackend_;
    rootScope = $rootScope.$new();
    location = $location;
  }));

  it('should login as a user', function () {
    var user = {
      email: 'test@gmail.com',
      name: 'test',
      _id: 1
    };
    mockBackend.expectPOST('/session/new').respond(user);
    location.path('/login');

    var postData = {
      name: 'test',
      password: 'test'
    };

    auth.login(postData, function() {});
    mockBackend.flush();
    expect(rootScope.loggedIn).toBe(true);
    expect(rootScope.currentUser).toEqual(user);
  });

});
