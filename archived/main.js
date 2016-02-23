/*
main.js
The main Angular file for theUrbanForrest.com
*/

var app = angular.module('HelloWorldApp',[]);
var HelloWorldCtrl = function($scope){
	$scope.greeting = "HelloWorldCtrl in action!";
};

function myController($scope) {
    $scope.users = [
			              {
			            	  name:"Mahesh",
							  description:"A geek",
							  age:"22"
			              },
			              {
			            	  name:"Ganesh",
							  description:"A nerd",
							  age:"25"
			              },
			              {
			            	  name:"Ramesh",
							  description:"A noob",
							  age:"27"
			              },
			              {
			            	  name:"Ketan",
							  description:"A psychopath",
							  age:"26"
			              },
			              {
			            	  name:"Niraj",
							  description:"Intellectual badass",
							  age:"29"
			              }
			            ];
}