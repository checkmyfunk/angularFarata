(function () {
  'use strict';

  var fromNowFilterFactory = function () {
    return function fromNowFilter (dateString) {
      return moment(dateString).fromNow();
    };
  };

  angular.module('auction').filter('fromNow', fromNowFilterFactory);

}());
