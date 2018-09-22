'use strict';

// Register `phoneList` component, along with its associated controller and template
export default angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'app1/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });