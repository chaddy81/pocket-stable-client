import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newObject: function() {
      this.transitionToRoute('documents.new');
    }
  }
});
