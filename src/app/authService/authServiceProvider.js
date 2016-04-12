angular.module('authService').provider('authService', function AuthServiceProvider() {

  let baseUrl = {
    defaultUrl:
  }
  let authTokenURL
  let loginURL
  let logoutURL
  let meURL
  let authTokenHeaders
  let loginHeaders
  let logoutHeaders
  let meHeaders

  this.setBaseUrl = (url) => {
    baseUrl.custom = url;
  };

  this.transformUser = (id, password) {
    let user = {};
    user[userID] = id;
    user[userPassword] = password;
    return user;
  };

  this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {

    // let's assume that the UnicornLauncher constructor was also changed to
    // accept and use the useTinfoilShielding argument
    return new UnicornLauncher(apiToken, useTinfoilShielding);
  }];
});
