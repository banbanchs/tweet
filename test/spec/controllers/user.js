'use strict';

describe('Controller: UserCtrl', function() {

  // load the controller's module
  beforeEach(module('tweetApp', function($provide) {
    $provide.decorator('$cookieStore', function($delegate) {
      $delegate.put('loggedIn', true);
      return $delegate;
    });
  }));

  var UserCtrl,
    mockBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $routeParams, _$httpBackend_) {
    scope = $rootScope.$new();
    mockBackend = _$httpBackend_;
    UserCtrl = $controller('UserCtrl', {
      $scope: scope,
      $routeParams: { name: 'testname' }
    });
  }));

  it('should load a user to the scope', function() {
    var user = {
      "id": 3,
      "email": "test@gmail.com",
      "name": "testname",
      "meta": {"following": ["root", "testing"]},
      "Tweets": [{
        "id": 3,
        "content": "Hello world!",
        "createdAt": "2015-05-06T12:36:58.770Z",
        "expiredAt": "2015-05-06T12:46:58.770Z"
      }, {
        "id": 6,
        "content": "Ok now.",
        "createdAt": "2015-05-06T12:41:55.014Z",
        "expiredAt": "2015-05-06T12:51:55.014Z"
      }, {
        "id": 10,
        "content": "OK?",
        "createdAt": "2015-05-08T07:09:11.693Z",
        "expiredAt": "2015-05-08T07:19:11.693Z"
      }, {
        "id": 11,
        "content": "OK!",
        "createdAt": "2015-05-08T07:10:49.996Z",
        "expiredAt": "2015-05-08T07:20:49.996Z"
      }]
    };
    mockBackend.expectGET('/api/users/testname').respond(user);
    mockBackend.flush();
    expect(scope.user.name).toBe('testname');
    expect(scope.tweets[0].User.name).toBe('testname');
    expect(scope.tweets.length).toBe(user.Tweets.length);
  });
});
