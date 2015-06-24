app.config([
  '$stateProvider', '$urlRouterProvider', 'RestangularProvider', 'configuration',
  function($stateProvider, $urlRouterProvider, RestangularProvider, configuration) {

  // Restangular configuration
  RestangularProvider.setBaseUrl('https://api.parse.com/1');
  RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json',
                  'X-Parse-Application-Id': configuration.parseApplicationId,
                  'X-Parse-REST-API-Key': configuration.parseRestAPIKey});

  // For any unmatched urls
  $urlRouterProvider.otherwise( ($injector) => {
    $injector.get('$state').go('state1.index');
  });

  // Now set up the states
  $stateProvider
    .state('id', {
      abstract: true,
      views: {
        main: {
          templateUrl: '../app/layouts/id/main.html'
        }
      }
    })
    .state('id.index', {
      url: '/home',
      views: {
        innerComponent: {
          templateUrl: '../app/components/home/home.html'
        }
      },
      data: {
        requireLogin: true
      }
    })
    .state('auth', {
      abstract: true,
      views: {
        main: {
          templateUrl: '../app/layouts/auth/main.html'
        }
      }
    })
    .state('auth.signUp', {
      url: '/signUp',
      views: {
        innerComponent: {
          templateUrl: '../app/components/signUp/signUp.html'
        }
      },
      data: {
        requireLogin: false
      }
    })
    .state('auth.signIn', {
      url: '/signIn',
      views: {
        innerComponent: {
          templateUrl: '../app/components/signIn/signIn.html'
        }
      },
      data: {
        requireLogin: false
      }
    })
    .state('state1', {
      abstract: true,
      views: {
        main: {
          templateUrl: '../app/layouts/state1/main.html'
        }
      }
    })
    .state('state1.index', {
      url: '/state1',
      views: {
        innerComponent: {
          templateUrl: '../app/components/component1/component1.html'
        }
      },
      data: {
        requireLogin: false
      }
    });
}]);
