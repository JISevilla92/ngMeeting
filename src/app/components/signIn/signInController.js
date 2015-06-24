angular.module('app').controller('signInController', [ 'userService', '$growl', '$state', 'localStorageService',
function(userService, $growl, $state, localStorageService) {
  
  this.signInForm = {};
  
  this.signIn = () => {

    let success = (obj) => {
      localStorageService.set('session_token', obj.sessionToken);
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
