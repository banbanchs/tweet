'use strict';

describe('Controller: NewTweetCtrl', function () {

  // load the controller's module
  beforeEach(module('tweetApp', function($provide) {
    $provide.decorator('$cookieStore', function($delegate) {
      $delegate.put('loggedIn', true);
      return $delegate;
    });
  }));

  var NewTweetCtrl,
    mockBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    mockBackend = _$httpBackend_;
    NewTweetCtrl = $controller('NewTweetCtrl', {
      $scope: scope
    });
  }));

  it('should create a new tweet', function () {
    mockBackend.expectPOST('/api/tweets', {content: 'content'}).respond(201, {
      '_id': 1,
      'content': 'content',
      'createdAt': 'now'
    });
    var newTweet = scope.createNewTweet('content');
    mockBackend.flush();
    expect(newTweet._id).toBe(1);
    expect(newTweet.content).toEqual('content');
  });
});
