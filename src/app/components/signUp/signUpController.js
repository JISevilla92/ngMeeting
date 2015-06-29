angular.module('app').controller('SignUpController', [ 'userService', '$growl', '$state',
function(userService, $growl, $state) {

	this.signUpForm = {};

	// TO DO: Create directive to check passwords validation.
	this.signUp = () => {

    let success = (obj) => {
      $state.go('id.index');
    };

    let failure = (err) => {
      $growl.box('Oops!', err.data.error, {
        class: 'danger',
        timeout: 3000
      }).open();
    };

		if (this.signUpForm.password === this.signUpForm.confirmPassword) {
			delete this.signUpForm.confirmPassword;
			userService.signUp(this.signUpForm, success, failure);  
		}
    
	};

}]);
