'use strict';

describe('Service: loader', function() {

  // load the service's module
  beforeEach(module('tweetApp'));

  // instantiate service
  var loader, mockBackend, api, cacheData;
  beforeEach(inject(function(_loader_, restApi, cache, _$httpBackend_) {
    loader = _loader_;
    cacheData = cache;
    api = restApi;
    mockBackend = _$httpBackend_;
  }));

  it('should load a user', function() {
    mockBackend.expectGET('/api/users/1').respond({
      '_id': 1,
      'name': 'guest',
      'email': 'guest@mail.com',
      'meta': {}
    });

    var user;
    var promise = loader({id: 1}, api.user, 1, cacheData.user);
    promise.then(function(data) {
      user = data;
    });
    expect(user).toBeUndefined();
    mockBackend.flush();
    expect(user._id).toEqual(1);
    expect(user.name).toEqual('guest');
    expect(cacheData.user.info().size).toEqual(1);
  });

  it('should load a tweets', function() {
    mockBackend.expectGET('/api/tweets/1').respond({
      "id": 1,
      "content": "Hello world!",
      "createdAt": "2015-04-27T07:59:36.641Z",
      "expiredAt": "2015-04-27T08:02:36.641Z",
      "User": {"id": 2, "email": "root@mail.com", "name": "root", "meta": {"following": ["guest"]}}
    });

    var tweet;
    var promise = loader({id: 1}, api.tweet, 1, cacheData.tweets);
    promise.then(function(data) {
      tweet = data;
    });
    expect(tweet).toBeUndefined();

    mockBackend.flush();
    expect(tweet.id).toEqual(1);
    expect(tweet.User.id).toEqual(2);
  });
});
