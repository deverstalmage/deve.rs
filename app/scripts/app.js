'use strict';

var deversApp = angular.module('deve.rsApp', ['ngRoute']);

deversApp
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                title: 'Welcome'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                title: 'Projects'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

deversApp
    .run(function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    });
