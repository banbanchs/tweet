'use strict';

describe('Service: getUser', function () {

  // load the service's module
  beforeEach(module('tweetApp'));

  // instantiate service
  var getUser, mockBackend;
  beforeEach(inject(function (_getUser_, _$httpBackend_) {
    getUser = _getUser_;
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
    var promise = getUser(1);
    promise.then(function(data) {
      user = data;
    });
    expect(user).toBeUndefined();
    mockBackend.flush();
    expect(user._id).toEqual(1);
    expect(user.name).toEqual('guest');
  });

});
