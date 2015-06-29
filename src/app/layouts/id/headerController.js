
angular.module('app').controller('HeaderController', [ 'userService',
function(userService) {
  
  this.user = userService.userInfo();

}]);
