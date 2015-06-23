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
    .state('signUp', {
      abstract: true,
      views: {
        main: {
          templateUrl: '../app/layouts/signUp/main.html'
        }
      }
    })
    .state('signUp.index', {
      url: '/signUp',
      views: {
        innerComponent: {
          templateUrl: '../app/components/signUp/signUp.html'
        }
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
      }
    });
}]);
