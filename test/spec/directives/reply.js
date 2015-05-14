'use strict';

describe('Directive: reply', function () {

  // load the directive's module
  beforeEach(module('tweetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make a reply element', inject(function ($compile) {
    scope.tweet = {
      "id": 6,
      "content": "Ok now.",
      "createdAt": "2015-05-06T12:41:55.014Z",
      "expiredAt": "2015-05-06T12:51:55.014Z",
      "User": {"id": 3, "email": "co@gmail.com", "name": "testname", "meta": {"following": ["root", "testing"]}}
    };
    element = angular.element('<reply></reply>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.find('.form-control').text()).toEqual('@testname ');
  }));
});
