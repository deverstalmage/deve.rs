'use strict';

angular.module('deve.rsApp')
    .service('Resume', function Resume() {
        return {
            getTechSkills: function() {
                return [
                    'Javascript (jQuery, AngularJS)',
                    'PHP (WordPress)',
                    'HTML & CSS (Bootstrap, Foundation, Sass)'
                ];
            },
            getExpertise: function() {
            },
            getEducation: function() {
                return ['BS Computer Science &mdash; University of Massachusetts, Amherst &mdash; 2008-2011'];
            },
            getExperience: function() {
            }
        };
    });
