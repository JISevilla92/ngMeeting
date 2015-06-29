angular.module('app').factory('spinnerInterceptor', [ "$q", "localStorageService", "spinnerService",
  function ($q, localStorageService, spinnerService) {

    let numResponses = 0;

    return {
      request: (config) => {
        numResponses++;
        if (numResponses === 1) {
          spinnerService.start('spinner');
        }
        return config;
      },
      response: (config) => {
        numResponses--;
        if (numResponses === 0) {
          spinnerService.stop('spinner');
        }
        return config;
      },
      responseError: (rejection) => {
        numResponses--;
        if (numResponses === 0) {
          spinnerService.stop('spinner');
        }
        return $q.reject(rejection);
      }
    };
  }
]);
