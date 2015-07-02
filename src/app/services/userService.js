angular.module('app').factory('userService', [ 'Restangular', 'localStorageService',
function(Restangular, localStorageService) {

  let loggedUser;

  return {
    signUp: (user, success, failure) => {

      let successCb = (obj) => {
        localStorageService.set('session_token', obj.sessionToken);
        localStorageService.set('object_id', obj.objectId);
        loggedUser = obj;
        success(obj);
      };
       
      return Restangular.all('users').post(user).then(successCb, failure);
    },
    signIn: (user, success, failure) => {

      let successCb = (obj) => {
        localStorageService.set('session_token', obj.sessionToken);
        localStorageService.set('object_id', obj.objectId);
        loggedUser = obj;
        success(obj);
       };

      return Restangular.all('login').customGET('', user).then(successCb, failure);
    },
    signOut: (success, failure) => {

      let successCb = (obj) => {
        localStorageService.remove('session_token');
        loggedUser = null;
        success(obj);
      };

      return Restangular.all('logout').post(undefined, {}, {'X-Parse-Session-Token': localStorageService.get('session_token')}).then(successCb, failure);
    },
    isAuth: () => {
      return localStorageService.get('session_token');
    },
    userInfo: () => {
      if (!loggedUser) {
        loggedUser = Restangular.all('users').customGET('me', {}, {'X-Parse-Session-Token': localStorageService.get('session_token')}).$object;
      }
      return loggedUser;
    },
    editUserInfo: (info, success, failure) => {

      let successCb = (obj) => {
        loggedUser.firstName = info.firstName;
        loggedUser.lastName = info.lastName;
        loggedUser.username = info.username;
        loggedUser.email = info.email;
        success(obj);
      };

      return Restangular.all('users').customPUT(info, localStorageService.get('object_id'), undefined, {'X-Parse-Session-Token': localStorageService.get('session_token')}).then(successCb, failure);
    }
  };

}]);
