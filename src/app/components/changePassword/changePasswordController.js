angular.module('app').controller('ChangePasswordController', [ 'userService', '$growl', '$state',
function(userService, $growl, $state) {

  this.passwordForm = {};

  this.changePassword = () => {

    let success = (obj) => {
      $growl.box('Oops!', 'Nueva contraseña seteada', {
        class: 'success',
        timeout: 3000
      }).open();
      $state.go('id.profile');
    };

    let failure = (err) => {
      $growl.box('Oops!', err.data.error, {
        class: 'danger',
        timeout: 3000
      }).open();
    };

    if (this.passwordForm.password === this.passwordForm.confirmationPassword) {
      delete this.passwordForm.confirmationPassword;
      userService.editUserPassword(this.passwordForm, success, failure);  
    } else {
      $growl.box('Oops!', 'Las contraseñas deben coincidir', {
        class: 'danger',
        timeout: 3000
      }).open();
    }
    
  };

}]);
