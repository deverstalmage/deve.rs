'use strict';

angular.module('deve.rsApp')
    .service('Resume', function Resume() {
        return {
            getTechSkills: function() {
                return [
                    'Javascript (jQuery, AngularJS)',
                    'PHP (WordPress)',
                    'HTML & CSS (Bootstrap, Foundation, Sass)',
                    'SQL (MySQL, PostgreSQL)',
                    'Python (Django, Flask)'
                ];
            },
            getExpertise: function() {
                return [
                    'Front-end & back-end development & engineering',
                    'Database design & implementation',
                ];
            },
            getEducation: function() {
                return [
                    'BS Computer Science - University of Massachusetts, Amherst - 2008-2011'
                ];
            },
            getExperience: function() {
                return [
                    'United Republic/Represent.Us - Web Developer - 2012-present',
                    'EZTakes, Inc. - Web Development Intern - 2010-2012',
                    'Blue Redefined, Inc. - Web Development Intern - 2009-2010'
                ];
            }
        };
    });
