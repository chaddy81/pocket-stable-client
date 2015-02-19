import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  title: "Forgot Password?",
  actions: {
    sendEmail: function() {
      var email = this.get('email');

      $.ajax({
        type: 'POST',
        data: {email: email},
        url: ENV.APP.host + '/api/users/forgot_password'
      });

      this.get("controllers.application").send('notify', {
        message: "Instructions have been sent to your email",
        type: "alert-success"});
      this.set('email', '');
      this.transitionTo('login');
    },

    goBack: function(){
      this.transitionToRoute('login');
    }
  }
});
