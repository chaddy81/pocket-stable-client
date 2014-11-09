import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  title: "Forgot Password?",
  actions: {
    sendEmail: function() {
      var email = this.get('email'),
          self = this;

      $.ajax({
        type: 'POST',
        url: ENV.APP.host + '/api/users/forgot_password',
        data: {email: email},
        success: function() {
          self.get("controllers.application").notify({
            message: "Instructions have been sent to your email",
            type: "alert-success"});
          self.transitionTo('login');
        },
        error: function(error) {
          self.get("controllers.application").notify({
            title: "Error!",
            message: error.responseText,
            type: "alert-error"});
        }
      });
    }
  }
});
