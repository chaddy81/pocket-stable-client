import Ember from 'ember';

export default Ember.Controller.extend({
  current: function() {
    this.get('controllers.application.currentPath');
  },
  title: 'Account Settings'

});