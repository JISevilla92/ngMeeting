angular.module('authService').service('userService', [
  'authServiceProvider', 'localStorageService',
  function(authServiceProvider, localStorageService) {

    let loggedUserToken = {};

    return {
      isLoggedIn: () => {
        return $http.get(authServiceProvider.authTokenURL, authServiceProvider.authTokenHeaders,
          loggedUserToken);
      },
      login: (id, password) => {
        promise = $http.get(authServiceProvider.loginURL, authServiceProvider.loginHeaders,
          authServiceProvider.transformUser(id, password));
        promise.then(() => {
          localStorageService.set('session_token', obj.sessionToken);
        })
        return promise;
      },
      logout: () => {
        localStorageService.remove('session_token');
        return $http.post(authServiceProvider.logoutURL, authServiceProvider.logoutHeaders,
          loggedUserToken);
      },
      getLoggedUser: () => {
        return $http.get(authServiceProvider.meURL, authServiceProvider.meHeaders, loggedUserToken);
      }
    }
  }

]);
