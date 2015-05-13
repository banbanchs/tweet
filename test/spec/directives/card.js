'use strict';

describe('Directive: card', function () {

  // load the directive's module
  beforeEach(module('tweetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card></card>');
    console.log(element);
    element = $compile(element)(scope);
    expect(element.find('.tweet-content').text()).toEqual('Hello World');
  }));
});
