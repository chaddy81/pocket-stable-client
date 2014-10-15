import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  needs: ["application"],
  actions: {
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('horses');
    },

    sessionAuthenticationFailed: function() {
      this.get('container').lookup('controller:application').notify({
            title: "Error!",
            message: "Please use a valid username/password.",
            type: "alert-error"});
    },

    sessionInvalidationSucceeded: function() {
      this.transitionTo('login');
    }
  }
});