'use strict';

/* Controllers */

var testerApp = angular.module('myApp.controllers', []);

var controllers = {};
controllers.HomeController = function ($scope) {
//    $scope.cache = $cacheFactory('testerProjects');
//    $scope.keys = [];
//    $scope.projects = [];
//    
//    if ($scope.cache == undefined) {
//        $scope.cache.put(1, {name: 'trilogi', version: '5.0'});
//        $scope.keys.push(1);
//        $scope.cache.put(2, {name: 'IFDT', version: '2.2'});
//        $scope.keys.push(2);
//    }
//    
//    for (var i=0; i<$scope.keys.length; i++) {
//        $scope.projects.push($scope.cache.get($scope.keys[i]));
//    }

    $scope.projects = [
        {name: 'trilogi', version: '5.0'},
        {name: 'IFDT', version: '2.2'}
    ];
    
    $scope.addProject = function() {
        $scope.projects.push({
            name: $scope.newProject.name, 
            version: $scope.newProject.version
        });
    };
};

controllers.ProjectController = function ($scope, $routeParams) {
    $scope.projectName = $routeParams.projectName;
};

testerApp.controller(controllers);