import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
  var session = JSON.parse(localStorage.getItem('ember_simple_auth:session'));
  if(session) {
    jqXHR.setRequestHeader("X-Auth-Token", session.user_token);
  }
});

var App = Ember.Application.extend({
  modulePrefix: 'pocket-stable-client', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'pocket-stable-client');

export default App;
