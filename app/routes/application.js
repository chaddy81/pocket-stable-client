import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      console.log(this.get('session'));
      this.transitionTo('horses');
    },

    sessionInvalidationSucceeded: function() {
      console.log('logged out');
      this.transitionTo('login');
    }
  }
});