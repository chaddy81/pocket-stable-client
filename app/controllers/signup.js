import Ember from 'ember';

export default Ember.Controller.extend({
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
      console.log(data);
    }.bind(this));
  }
});