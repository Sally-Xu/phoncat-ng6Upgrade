'use strict';
import angular from 'angular';
import 'angular-resource';
import 'angular-route';
import 'angular-animate';

import './core/core.module';
import './phone-list/phone-list.module';
import './phone-detail/phone-detail.module';
import './phone-list/phone-list.component';
import './phone-detail/phone-detail.component';
import './core/checkmark/checkmark.filter';

// Define the `phonecatApp` module
export default angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'ngResource',
  'core',
  'phoneDetail',
  'phoneList'
]);
