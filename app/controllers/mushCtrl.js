'use strict';

mushApp.controller('mushCtrl', function($scope, $window, MushFactory) {

	$scope.mushrooms = [];

	function getMushrooms() {
		MushFactory.getMushroomData()
		.then( (mushData) => {
			let mushList = Object.values(mushData.data);
			$scope.mushrooms = mushList;
		});
	}

	getMushrooms();

	$scope.getPoisonous = () => {
		MushFactory.getMushroomData()
		.then( (mushData) => {
			let mushList = Object.values(mushData.data);
			let poisonous = mushList.filter( (mushroomObj) => {
				return !mushroomObj.edible;
			});
			console.log(poisonous);
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
		});
	};



});