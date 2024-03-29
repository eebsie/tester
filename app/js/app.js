'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/project/:projectName', {templateUrl: 'partials/project.html', controller: 'ProjectController'});
  $routeProvider.when('/newproject', {templateUrl: 'partials/newproject.html', controller: 'ProjectController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
