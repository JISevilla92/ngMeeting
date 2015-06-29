angular.module('app').controller('SignOutController', [ 'userService', '$growl', '$state', 
function(userService, $growl, $state) {

  this.signOut = () => {

    let success = (obj) => {
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
