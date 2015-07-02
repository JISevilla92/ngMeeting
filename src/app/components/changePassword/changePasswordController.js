angular.module('app').controller('ChangePasswordController', [ 'userService', '$growl', '$state', '$translate',
function(userService, $growl, $state, $translate) {

  this.passwordForm = {};

  this.changePassword = () => {

    let success = (obj) => {
      $growl.box('Oops!', $translate.instant('CHANGE_PASSWORD_FORM.SUCCESS'), {
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
      $growl.box('Oops!', $translate.instant('CHANGE_PASSWORD_FORM.ERROR.PASSWORD_SAME'), {
        class: 'danger',
        timeout: 3000
      }).open();
    }
    
  };

}]);
