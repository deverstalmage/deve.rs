'use strict';

angular.module('deve.rsApp')
    .controller('ProjectsCtrl', function ($scope,  Projects) {
        $scope.projects = Projects.getProjects();
    });
