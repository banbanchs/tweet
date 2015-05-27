'use strict';

describe('Service: restApi', function() {

  // load the service's module
  beforeEach(module('tweetApp', function($provide) {
    $provide.decorator('$cookieStore', function($delegate) {
      $delegate.put('loggedIn', true);
      return $delegate;
    });
  }));

  // instantiate service
  var restApi, mockBackend;
  beforeEach(inject(function(_restApi_, _$httpBackend_) {
    restApi = _restApi_;
    mockBackend = _$httpBackend_;
  }));

  it('should save a new tweet content', function() {
    mockBackend.expectPOST('/api/tweets', {content: 'content'}).respond(201, {
      '_id': 1,
      'content': 'content',
      'createdAt': 'now'
    });
    var newTweet = new restApi.tweet({content: 'content'});
    newTweet.$save();
    mockBackend.flush();
    expect(newTweet._id).toBe(1);
  });

});
