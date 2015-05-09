'use strict';

describe('Service: loader', function () {

  // load the service's module
  beforeEach(module('tweetApp'));

  // instantiate service
  var loader, mockBackend, api, cacheData;
  beforeEach(inject(function (_loader_, restApi, cache, _$httpBackend_) {
    loader = _loader_;
    cacheData = cache;
    api = restApi;
    mockBackend = _$httpBackend_;
  }));

  it('should load a user', function () {
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

  it('should load a tweet', function() {
    mockBackend.expectGET('/api/tweet/1').respond({
      'code': 200,
      'tweet': {
        'id': 1,
        'content': 'Hello world!',
        'createdAt': '2015-04-27T07:59:36.641Z',
        'expiredAt': '2015-04-27T08:02:36.641Z',
        'UserId': 2
      },
      'user': {
        'id': 2,
        'email': 'root@mail.com',
        'name': 'root',
        'password': 'root',
        'meta': {
          'following': [
            'guest'
          ]
        },
        'createdAt': '2015-04-27T07:59:36.628Z',
        'updatedAt': '2015-04-27T07:59:36.628Z'
      }
    });

    var tweet;
    var promise = loader({id:1}, api.tweet, 1, cacheData.tweet);
    promise.then(function(data) {
      tweet = data;
    });
    expect(tweet).toBeUndefined();

    mockBackend.flush();
    expect(tweet.code).toEqual(200);
    expect(tweet.tweet.id).toEqual(1);
    expect(tweet.user.id).toEqual(tweet.tweet.UserId);
  });

  it('should load a list of tweet', function() {
    mockBackend.expectGET('/api/tweet').respond({
      'code': 200,
      'tweets': [
      {
        'id': 1,
        'content': 'Hello world!',
        'createdAt': '2015-04-27T07:59:36.641Z',
        'expiredAt': '2015-04-27T08:02:36.641Z',
        'UserId': 2
      }
      ]
    });

    var tweets;
    var promise = loader({}, api.tweet);
    promise.then(function(data) {
      tweets = data;
    });
    mockBackend.flush();
    expect(tweets.code).toEqual(200);
    expect(tweets.tweets.length).toEqual(1);
    expect(tweets.tweets[0].content).toEqual('Hello world!');
  });
});
