import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    updateUser: function() {
      var old_password = this.get('current_password'),
          password = this.get('password'),
          password_confirmation = this.get('password_confirmation'),
          token = this.get('session.user_token'),
          self = this;

      this.get('store').find('user', token).then(function(user) {
        user.set('current_password', old_password);
        user.set('password', password);
        user.set('password_confirmation', password_confirmation);
        user.save().then(function() {
          self.get("controllers.application").notify({
            title: "Success!",
            message: "Password had been updated.",
            type: "alert-success"});
          self.transitionToRoute('horses');
        });
      });
    }
  }
});
