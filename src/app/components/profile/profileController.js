angular.module('app').controller('ProfileController', [ 'userService', '$growl', 
function(userService, $growl) {
  
  this.editing = false;
  this.user = userService.userInfo();

  this.editData = () => {
    this.editing = true;
  };

  this.cancelEditData = () => {
    this.editing = false;
  };

  this.submitEdition = () =>{

    let data = {
      "firstName": this.user.firstName,
      "lastName": this.user.lastName,
      "username": this.user.username,
      "email": this.user.email
    };

    let success = (obj) => {
      this.editing = false;
    };

    let failure = (err) => {
      $growl.box('Oops!', err.data.error, {
        class: 'danger',
        timeout: 3000
      }).open();
    };

    userService.editUserInfo(data, success, failure);

  };

}]);
