'use strict';
import '../core/phone/phone.module';

// Define the `phoneDetail` module
export default angular.module('phoneDetail', [
  'ngRoute',
  'core.phone'
]);
