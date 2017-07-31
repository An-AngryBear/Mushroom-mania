'use strict';

let mushApp = angular.module("mushApp", ['ngRoute'])
.constant("FirebaseUrl", "https://mushroom-mania-cd766.firebaseio.com/");

mushApp.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/mushDisplay.html',
		controller: 'mushCtrl'
	})
	.otherwise('/');
});