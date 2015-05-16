'use strict';

describe('Directive: card', function() {

  // load the directive's module
  beforeEach(module('tweetApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a tweet card', inject(function($compile) {
    scope.tweet = {
      "id": 6,
      "content": "Ok now.",
      "createdAt": "2015-05-06T12:41:55.014Z",
      "expiredAt": "2015-05-06T12:51:55.014Z",
      "User": {"id": 3, "email": "co@gmail.com", "name": "testname", "meta": {"following": ["root", "testing"]}}
    };
    element = angular.element('<card></card>');
    element = $compile(element)(scope);
    scope.$digest();

    var date = element.find('.date');
    expect(element.find('.tweet-content').text()).toEqual('Ok now.');
    expect(date.attr('datetime')).toEqual(scope.tweet.createdAt);
    // +0800 (CST)
    expect(date.text()).toEqual('05-06 20:41');
    expect(element.find('img.avatar').attr('src')).toBeTruthy();
  }));
});
