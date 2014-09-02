import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateUser: function() {
      var old_password = this.get('current_password'),
          password = this.get('password'),
          password_confirmation = this.get('password_confirmation'),
          token = this.get('session.user_token');

      var user = this.get('store').find('user', token).then(function(user, error) {


        user.set('current_password', old_password);
        user.set('password', password);
        user.set('password_confirmation', password_confirmation);
        user.save().then(function(data) {
          console.log(data);
        }).catch(function(error) {
          console.log(error.responseText);
        });

      });
    }
  }
});
