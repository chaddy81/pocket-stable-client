import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      console.log(this.get('session'));
      this.transitionTo('horses');
    },

    sessionInvalidationSucceeded: function() {
      this.transitionTo('login');
    },

    weightCalculator: function() {
      console.log(this.get('session.horse'));
    }
  }
});