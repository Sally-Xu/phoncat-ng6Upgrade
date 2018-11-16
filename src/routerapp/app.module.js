
'use strict';
import angular from 'angular';
import 'angular-ui-router';

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    const base = 'routerapp';
    $stateProvider
        .state('sink', {
            url: '/ui/{path:.*}',
            // used to clear out ui-view when angular router is activated
            template: ''
        })
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'routerapp/home.html'
        })
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'routerapp/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
    
                // the main template will be placed here (relatively named)
                '': { templateUrl: 'routerapp/about.html' },
    
                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },
    
                // for column two, we'll define a separate controller 
                'columnTwo@about': { 
                    templateUrl: 'routerapp/table-data.html',
                    controller: 'scotchController'
                }
            }
    
        });
        
        $urlRouterProvider.otherwise('/');
});

// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});

export default routerApp;