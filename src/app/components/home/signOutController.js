angular.module('app').controller('SignOutController', [ 'userService', '$growl', '$state', 'localStorageService',
function(userService, $growl, $state, localStorageService) {

  this.signOut = () => {

    let success = (obj) => {
      localStorageService.remove('session_token');
      $state.go('auth.signIn');
    };

    let failure = (err) => {
      $growl.box('Oops!', err.data.error, {
        class: 'danger',
        timeout: 3000
      }).open();
    };

    userService.signOut(success, failure);
    
  };

}]);
