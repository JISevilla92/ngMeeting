angular.module('app').controller('signInController', [ 'userService', '$growl', '$state', 
function(userService, $growl, $state) {
  
  this.signInForm = {};
  
  this.signIn = () => {

    let success = (obj) => {
      $state.go('id.index');
    };

    let failure = (err) => {
      $growl.box('Oops!', err.data.error, {
        class: 'danger',
        timeout: 3000
      }).open();
    };

    userService.signIn(this.signInForm, success, failure);

  };

}]);
