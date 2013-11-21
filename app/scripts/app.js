'use strict';

var deversApp = angular.module('deve.rsApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch']);

deversApp
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                title: 'Web Developer'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                title: 'Projects'
            })
            .when('/resume', {
              templateUrl: 'views/resume.html',
              controller: 'ResumeCtrl',
              title: 'Resume'
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
