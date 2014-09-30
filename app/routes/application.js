import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  needs: ["application"],
  actions: {
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('horses');
    },

    sessionAuthenticationFailed: function() {
      this.triggerEvent('test');
    },

    sessionInvalidationSucceeded: function() {
      this.transitionTo('login');
    }
  }
});