import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.horse.name');
  }.property('model.horse.name'),

  actions: {
    newObject: function() {
      this.transitionToRoute('photos.new');
    }
  }
});
