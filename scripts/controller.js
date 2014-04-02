'use strict';

angular.module('introApp')
        .controller('MainCtrl', function($scope) {

            $scope.menu= [
            	'Bonjour les gens',
            	'Hello world',
            	'Guten tag menchen',
            	'Ola'
            ];

            $scope.newItem='';

            $scope.addItem = function() {
            	$scope.menu.push($scope.newItem);
            	$scope.newItem='';
            }

        });