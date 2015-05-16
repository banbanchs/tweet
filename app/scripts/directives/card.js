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
      + '<a href="" class="account-group"><img class="avatar img-circle" gravatar-src-once="\'{{ tweet.User.email }}\'" gravatar-size="50" alt="avatar"/><strong class="fullname">{{ tweet.User.name }}</strong><span class="username">{{ tweet.User.name }}</span></a>'
      + '<time class="date pull-right" datetime="{{ tweet.createdAt }}">{{ tweet.createdAt | date:"MM-dd HH:mm"}}</time>'
      + '</div>'
      + '<p class="tweet-content">{{ tweet.content }}</p>'
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
