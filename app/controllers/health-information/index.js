import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit: function() {
      this.transitionToRoute('health-information.edit');
    }
  }
});
