'use strict';

angular.module('deve.rsApp')
    .controller('ResumeCtrl', function ($scope, Resume) {
        var resume = {};

        resume[1] = Resume.getTechSkills();
        resume[1].title = 'Technical Skills';

        resume[0] = Resume.getExpertise();
        resume[0].title = 'Expertise';

        resume[3] = Resume.getEducation();
        resume[3].title = 'Education';

        resume[2] = Resume.getExperience();
        resume[2].title = 'Experience';

        $scope.resume = resume;
    });
