import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    newObject: function() {
      this.transitionToRoute('documents.new');
    }
  }
});
