'use strict';

describe('Directive: reply', function () {

  // load the directive's module
  beforeEach(module('tweetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<reply></reply>');
    element = $compile(element)(scope);
    expect(element.find('.form-control').text()).toEqual('@test ');
  }));
});
