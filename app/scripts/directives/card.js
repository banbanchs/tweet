'use strict';

/**
 * @ngdoc directive
 * @name tweetApp.directive:card
 * @description
 * # card
 */
angular.module('tweetApp')
  .directive('card', function() {
    return {
      template: '<div class="card">'
      + '<div class="card-inner">'
      + '<div class="content">'
      + '<div class="card-header">'
      + '<a href="" class="account-group"><img class="avatar img-circle" src="/images/50x50.png" alt="avatar"/><strong class="fullname">banbanchs</strong> <span class="username">banbanchs</span></a>'
      + '<time class="date pull-right" datetime="2015-04-27T07:59:36.641Z">07:59 04-27</time>'
      + '</div>'
      + '<p class="tweet-content">Hello World</p>'
      + '<div class="card-footer"><a href=""><span class="glyphicon glyphicon-console"></span></a><a href=""><span class="glyphicon glyphicon-star"></span></a><a href=""><span class="glyphicon glyphicon-refresh"></span></a></div>'
      + '</div></div></div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        element.next().hide();
        element.click(function() {
          element.parent().toggleClass('open');
          element.next().slideToggle('300').find('.form-control').removeClass('clicked').next().hide();
        });
      }
    };
  });
