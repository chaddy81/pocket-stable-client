import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  actions: {
    createUser: function() {
      var name = this.get('name'),
          email = this.get('email'),
          password = this.get('password');

      var user = this.get('store').createRecord('user', { name: name, email: email, password: password, password_confirmation: password });
      var self = this;

      user.save().then(function(data) {
        console.log("Successful data: " + data);
        self.transitionToRoute('login');
      }, function(data) {
        var errors = data.errors;
        var newErrors = '';

        for(var key in errors) {
          newErrors += key + ' ' + errors[key] + ', ';
        }

        newErrors = newErrors.substring(0, newErrors.lastIndexOf(','));

        this.get("controllers.application").send('notify', {
          message: newErrors,
          type: "alert-error"});
      }.bind(this));
    }
  }
});
