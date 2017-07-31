'use strict';

mushApp.controller('mushCtrl', function($scope, $window, MushFactory) {

	$scope.value = 1;

	$scope.getPoisonous = () => {
		MushFactory.getMushroomData()
		.then( (mushData) => {
			let mushList = Object.values(mushData.data);
			let poisonous = mushList.filter( (mushroomObj) => {
				return !mushroomObj.edible;
			});
			console.log(poisonous);
			$scope.value = 1;
		});

	};

	$scope.getNonPoisonous = () => {
		MushFactory.getMushroomData()
		.then( (mushData) => {
			let mushList = Object.values(mushData.data);
			let nonPoisonous = mushList.filter( (mushroomObj) => {
				return mushroomObj.edible;
			});
			console.log(nonPoisonous);
			$scope.value = 2;
		});
	};



});