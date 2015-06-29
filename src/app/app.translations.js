app.config([
  '$translateProvider',
  function($translateProvider) {

  $translateProvider.translations('es', {
    COMPONENT_1_PHRASE: 'Esta es la componente 1',
    PROFILE: {
      CREATION: 'Fecha de alta',
      EMAIL: 'Email',
      FIRSTNAME: 'Nombre',
      LASTNAME: 'Apellido',
      TITLE: 'Mi Perfil',
      USERNAME: 'Nombre de usuario'
    },
    SIGN_IN_FORM: {
      ERROR: {
        NAME_LENGTH: 'Longitud inválida: debería ser de entre 2 y 64 caracteres.',
        PASSWORD_LENGTH: 'Longitud inválida: debería ser de entre 8 y 32 caracteres.'
      },
      PASSWORD: 'Contraseña',
      SIGN_IN: 'Ingresar',
      USERNAME: 'Nombre de usuario'
    },
    SIGN_OUT: 'Salir',
    SIGN_UP_FORM: {
      CONFIRM_PASSWORD: 'Confirmar contraseña',
      EMAIL: 'Email',
      ERROR: {
        EMAIL_LENGTH: 'Longitud inválida: debería ser de entre 8 y 64 caracteres.',
        NAME_LENGTH: 'Longitud inválida: debería ser de entre 2 y 64 caracteres.',
        PASSWORD_LENGTH: 'Longitud inválida: debería ser de entre 8 y 32 caracteres.'
      },
      FIRSTNAME: 'Nombre',
      LASTNAME: 'Apellido',
      PASSWORD: 'Contraseña',
      SIGN_UP: 'Registrarme',
      USERNAME: 'Nombre de usuario'
    }
  });
  $translateProvider.preferredLanguage('es');
  $translateProvider.useSanitizeValueStrategy(null);
}]);
