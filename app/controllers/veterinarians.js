import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Veterinarians",
  actions: {
    newObject: function() {
      this.transitionToRoute('veterinarians.new');
    }
  }
});
