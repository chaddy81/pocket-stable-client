import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
  var session = JSON.parse(localStorage.getItem('ember_simple_auth:session'));
  if(session) {
    jqXHR.setRequestHeader("X-Auth-Token", session.user_token);
  }
});

window.ENV = config;

loadInitializers(App, config.modulePrefix);

export default App;
