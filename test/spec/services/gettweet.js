'use strict';

describe('Service: getTweet', function () {

  // load the service's module
  beforeEach(module('tweetApp'));

  // instantiate service
  var getTweet, mockBackend;
  beforeEach(inject(function (_getTweet_, _$httpBackend_) {
    getTweet = _getTweet_;
    mockBackend = _$httpBackend_;
  }));

  it('should load a tweet', function () {
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
    var promise = getTweet(1);
      promise.then(function(data) {
        tweet = data;
      });
    expect(tweet).toBeUndefined();

    mockBackend.flush();
    expect(tweet.code).toEqual(200);
    expect(tweet.tweet.id).toEqual(1);
    expect(tweet.user.id).toEqual(tweet.tweet.UserId);
  });

});
