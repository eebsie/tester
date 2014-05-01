'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    var scope, homeCtrl, projectCtrl, newProjectCtrl;

    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        var routeParams = {
            projectName: "testProject"
        };
        
        //declare the controller and inject our empty scope
        homeCtrl = $controller('HomeCtrl', {$scope: scope});
        projectCtrl = $controller('ProjectCtrl', {$scope: scope, $routeParams: routeParams});
        newProjectCtrl = $controller('NewProjectCtrl', {$scope: scope});
    }));

    it('should have created HomeCtrl', function() {
        expect(homeCtrl).toBeDefined();
    });

    it('should have created ProjectCtrl', function() {
        expect(projectCtrl).toBeDefined();
    });

    it('should have created NewProjectCtrl', function() {
        expect(newProjectCtrl).toBeDefined();
    });
    
    it ('should have 2 projects in HomeCtrl', function() {
        expect(scope.projects.length).toBe(2);
    });
    
    it ('should have "testProject" in ProjectCtrl', function() {
        expect(scope.projectName).toBe("testProject");
    });

});
