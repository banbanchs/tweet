'use strict';

describe('Service: restApi', function () {

  // load the service's module
  beforeEach(module('tweetApp'));

  // instantiate service
  var restApi;
  beforeEach(inject(function (_restApi_) {
    restApi = _restApi_;
  }));

  it('should do something', function () {
    expect(!!restApi).toBe(true);
  });

});
