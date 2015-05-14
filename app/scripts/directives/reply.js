'use strict';

/**
 * @ngdoc directive
 * @name tweetApp.directive:reply
 * @description
 * # reply
 */
angular.module('tweetApp')
  .directive('reply', function() {
    return {
      template: '<div class="reply">' +
      '<img src="/images/32x32.png" alt="my avatar"/>' +
      '<div class="reply-content input-group col-lg-12">' +
      '<div class="form-control" contenteditable="true">@{{ tweet.User.name }} </div>' +
      '<button class="btn btn-primary pull-right">Reply</button>' +
      '</div>' +
      '</div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        element.find('.form-control').click(function() {
          $(this).addClass('clicked').next().show();
        });
      }
    };
  });
