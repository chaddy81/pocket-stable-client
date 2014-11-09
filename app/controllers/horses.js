import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'My Horses',
  actions: {
    newObject: function() {
      this.transitionToRoute('horses.new');
    }
  }
});
