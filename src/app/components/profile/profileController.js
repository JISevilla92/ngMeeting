angular.module('app').controller('ProfileController', [ 'userService', 
function(userService) {
  
  this.user = userService.userInfo();

}]);
