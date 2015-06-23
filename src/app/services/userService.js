angular.module('app').factory('userService', [ 'Restangular', '$growl',
function(Restangular, $growl) {

	return {
		signUp: function(user) {
			return Restangular.all('users').post(user).then(
				function(obj) {
					$growl.box('Great!', 'Account created!', {
				            class: 'success',
				            timeout: 3000
				    }).open();
				},
				function(err) {
					$growl.box('Oops!', err.data.error, {
				            class: 'danger',
				            timeout: 3000
				    }).open();
				});
		}
	};

}]);