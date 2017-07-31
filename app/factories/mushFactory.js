'use strict';

mushApp.factory("MushFactory", function($q, $http, FirebaseUrl) {
	console.log(FirebaseUrl);
	let getMushroomData = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}mushrooms.json`)
			.then( (data) => {
				resolve(data);
			})
			.catch( (err) => {
				console.log(err);
				reject(err);
			});
		});
	};

	return {getMushroomData};
});