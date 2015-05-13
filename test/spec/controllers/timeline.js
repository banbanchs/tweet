'use strict';

describe('Controller: TimelineCtrl', function() {

  // load the controller's module
  beforeEach(module('tweetApp'));

  var TimelineCtrl,
    mockBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
    mockBackend = _$httpBackend_;
    scope = $rootScope.$new();
    TimelineCtrl = $controller('TimelineCtrl', {
      $scope: scope
    });
  }));

  it('should load a list of tweets to the scope', function() {
    var tweets = [{
      "id": 12,
      "content": "OK!",
      "createdAt": "2015-05-08T07:10:49.996Z",
      "expiredAt": "2015-05-08T07:20:49.996Z",
      "User": {"id": 4, "email": "test@tset.com", "name": "testing", "meta": null}
    }, {
      "id": 10,
      "content": "OK?",
      "createdAt": "2015-05-08T07:09:11.693Z",
      "expiredAt": "2015-05-08T07:19:11.693Z",
      "User": {"id": 3, "email": "co@gmail.com", "name": "banbanchs", "meta": {"following": ["root", "testing"]}}
    }, {
      "id": 6,
      "content": "Ok now.",
      "createdAt": "2015-05-06T12:41:55.014Z",
      "expiredAt": "2015-05-06T12:51:55.014Z",
      "User": {"id": 3, "email": "co@gmail.com", "name": "banbanchs", "meta": {"following": ["root", "testing"]}}
    }, {
      "id": 3,
      "content": "Hello world!",
      "createdAt": "2015-05-06T12:36:58.770Z",
      "expiredAt": "2015-05-06T12:46:58.770Z",
      "User": {"id": 3, "email": "co@gmail.com", "name": "banbanchs", "meta": {"following": ["root", "testing"]}}
    }, {
      "id": 1,
      "content": "Hello world!",
      "createdAt": "2015-04-27T07:59:36.641Z",
      "expiredAt": "2015-04-27T08:02:36.641Z",
      "User": {"id": 2, "email": "root@mail.com", "name": "root", "meta": {"following": ["guest"]}}
    }];
    mockBackend.expectGET('/api/tweets').respond(tweets);

    mockBackend.flush();
    expect(scope.tweets.length).toBe(5);
    expect(Array.isArray(scope.tweets)).toBe(true);
    expect(angular.equals(tweets, scope.tweets));
  });
});
