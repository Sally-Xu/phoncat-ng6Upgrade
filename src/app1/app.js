'use strict';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-route';
import 'angular-animate';
import './core/core.module';

var routerApp = angular.module('routerApp', ['ui.router', 'core']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('/', {
        url: '',
        // Used to clear out ui-view when angular router is activated
        templateUrl: ''
    })
    .state('home1', {
        url: '/home1',
        templateUrl: 'app1/home/home.template.html'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        // we'll get to this in a bit       
    });

});

export default routerApp;