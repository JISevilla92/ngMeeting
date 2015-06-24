app.run([
  '$rootScope', '$state', 'userService',
  function ($rootScope, $state, userService) {
  $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams) {
      if (!userService.isAuth() && toState.data.requireLogin) {
        event.preventDefault();
        $state.go('auth.signIn');
      } else if (userService.isAuth() && !toState.data.requireLogin) {
        event.preventDefault();
        $state.go('id.index');
      }
  });
}]);
