'use strict';

angular.module('deve.rsApp')
    .service('Skills', function Skills() {
        $scope.skills = {
            'languages': [
                'JavaScript',
                'PHP',
                'SQL',
                'HTML5',
                'CSS3/Scss',
                'Python',
                'Java'
            ],
            'software': [
                'AngularJS',
                'WordPress',
                'jQuery',
                'CSS Frameworks (Bootstrap/Foundation/etc)'
            ],
            'tools/platforms': [
                'ActionKit',
                'Amazon Web Services (EC2, RDS, CloudFront, S3, Route 53)',
                'Apache',
                'nginx',
                'MySQL/PostgreSQL'
            ]
        };
    });
