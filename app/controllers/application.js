import Ember from 'ember';

export default Ember.Controller.extend({
  full_name: function() {
    var full_name = this.get('session').user_first_name + ' ' + this.get('session').user_last_name;
    return full_name;
  },
  title: function() {
    return this.get('title');
  }

});
