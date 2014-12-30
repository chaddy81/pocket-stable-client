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
    },

    didTransition: function() {
      console.log(this.get('session'));
      if ($('.pushy.pushy-open').length) {
        $('.pushy.pushy-open').removeClass('pushy-open').addClass('pushy-left');
        $('body').removeClass('pushy-active');
      }

      if($('body').hasClass('fullwhite')) {
        $('body').removeClass('fullwhite');
      }
    },

    // goBack: function(){
    //   console.log(window.history.state.path);
    //   window.history.back();
    // }
  }
});