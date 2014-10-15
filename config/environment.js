/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pocket-stable-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth-devise'] = {
    authorizer: 'simple-auth-authorizer:devise',
    serverTokenEndpoint: 'http://0.0.0.0:3000/users/sign_in',
    crossOriginWhitelist: ['http://0.0.0.0:3000', 'http://0.0.0.0:3000/api/users']
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.serverTokenEndpoint = 'http://0.0.0.0:3000/users/sign_in';
    crossOriginWhitelist: ['http://0.0.0.0:3000', 'http://0.0.0.0:3000/api/users'];
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
