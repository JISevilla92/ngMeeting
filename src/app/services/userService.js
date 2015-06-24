angular.module('app').factory('userService', [ 'Restangular', 'localStorageService',
function(Restangular, localStorageService) {

	return {
		signUp: (user, success, failure) => {
			return Restangular.all('users').post(user).then(success, failure);
		},
		signIn: (user, success, failure) => {
			return Restangular.all('login').customGET('', user).then(success, failure);
		},
		signOut: (success, failure) => {
			return Restangular.all('logout').post(undefined, {}, {'X-Parse-Session-Token': localStorageService.get('session_token')}).then(success, failure);
		},
		isAuth: () => {
			return localStorageService.get('session_token');
		}
	};

}]);