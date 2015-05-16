'use strict';

describe('Service: getTweet', function() {

  // load the service's module
  beforeEach(module('tweetApp', function($provide) {
    $provide.decorator('$cookieStore', function($delegate) {
      $delegate.put('loggedIn', true);
      return $delegate;
    });
  }));

  // instantiate service
  var getTweet, mockBackend;
  beforeEach(inject(function(_getTweet_, _$httpBackend_) {
    getTweet = _getTweet_;
    mockBackend = _$httpBackend_;
  }));

  it('should load a tweets', function() {
    mockBackend.expectGET('/api/tweets').respond([{
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
    }]);

    var tweets;
    var promise = getTweet();
    promise.then(function(data) {
      tweets = data;
    });
    expect(tweets).toBeUndefined();

    mockBackend.flush();
    expect(tweets.length).toEqual(5);
  });

});
