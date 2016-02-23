/*
theUrbanForrestMain_controller.js
The main controller for theUrbanForrest
by fching
*/

/*BEGIN Define angular.module and .controller*/
var mainApp = angular.module('mainApp', [])
	.controller('mainController', function($scope){
		$scope.NameChange = function() {
			$scope.greeting = "Hello " + $scope.name;
		};

		$scope.AddNumsInit = function() {
			$scope.sum = 0;
		};
		
		$scope.AddNumbers = function() {
			var a = Number($scope.a || 0);
			var b = Number($scope.b || 0);
			$scope.sum = a+b;
		};

		$scope.CounterInit = function() {
			$scope.counter = 0;
		};

		$scope.CounterIncrement = function() {
			$scope.counter += $scope.sum;
		};

		$scope.CounterDecrement = function() {
			$scope.counter -= $scope.sum; 
		};

	});

/*END Define*/