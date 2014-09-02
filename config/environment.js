/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
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

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.authorizer = 'simple-auth-authorizer:devise';
    ENV.APP.serverTokenEndpoint = 'http://0.0.0.0:3000/users/sign_in';
    ENV.APP.crossOriginWhitelist = ['http://0.0.0.0:3000', 'http://0.0.0.0:3000/api/users'];
    ENV.APP.host = 'http://0.0.0.0:3000';
  }

  if (environment === 'test') {
    ENV.APP.authorizer = 'simple-auth-authorizer:devise';
    ENV.APP.serverTokenEndpoint = 'http://pocket-stable-api/users/signin';
    ENV.APP.host = 'http://pocket-stable-api.herokuapp.com';
    ENV.APP.crossOriginWhitelist = ['http://pocket-stable-api.herokuapp.com', 'http://pocket-stable-api.herokuapp.com/api/users'];
  }

  if (environment === 'staging') {
    ENV.APP.authorizer = 'simple-auth-authorizer:devise';
    ENV.APP.serverTokenEndpoint = 'http://pocket-stable-api/users/signin';
    ENV.APP.host = 'http://pocket-stable-api.herokuapp.com';
    ENV.APP.crossOriginWhitelist = ['http://pocket-stable-api.herokuapp.com', 'http://pocket-stable-api.herokuapp.com/api/users'];
  }

  if (environment === 'production') {
    ENV.APP.authorizer = 'simple-auth-authorizer:devise';
    ENV.APP.serverTokenEndpoint = 'http://pocket-stable-api/users/signin';
    ENV.APP.host = 'http://pocket-stable-api.herokuapp.com';
    ENV.APP.crossOriginWhitelist = ['http://pocket-stable-api.herokuapp.com', 'http://pocket-stable-api.herokuapp.com/api/users'];
  }

  return ENV;
};
