angular.module('app').controller('SignUpController', [ 'userService',
function(userService) {

	this.signUpForm = {};
	// TO DO: Create directive to check passwords validation.
	this.signUp = function() {
		if (this.signUpForm.password === this.signUpForm.confirmPassword) {
			delete this.signUpForm.confirmPassword;
			userService.signUp(this.signUpForm);
		}
	};

}]);
