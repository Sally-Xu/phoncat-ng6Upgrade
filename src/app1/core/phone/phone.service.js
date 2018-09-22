'use strict';

export default angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('app1/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
