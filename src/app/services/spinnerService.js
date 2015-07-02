angular.module('app').factory('spinnerService', [ 'usSpinnerService', '$timeout',
  function(usSpinnerService, $timeout) {
    return {
      start: (spinner) => {
        $timeout(function() {
          usSpinnerService.spin(spinner);
        }, 200);
      },
      stop: (spinner) => {
        $timeout(function() {
          usSpinnerService.stop(spinner);
        }, 200);
      }
    };
  }
]);
