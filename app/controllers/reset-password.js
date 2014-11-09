import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  queryParams: ['reset_password_token'],
  reset_password_token: null,
  title: "Reset Password",
  actions: {
    sendPassword: function() {
      var password = this.get('password'),
          password_confirmation = this.get('password_confirmation'),
          reset_token = this.get('reset_password_token'),
          self = this;

      $.ajax({
        type: 'POST',
        url: ENV.APP.host + '/api/users/reset_password',
        data: {password: password, password_confirmation: password_confirmation, reset_token: reset_token},
        success: function() {
          self.get("controllers.application").notify({
            message: "Password has been reset",
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
