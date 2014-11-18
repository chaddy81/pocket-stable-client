import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.horse.name');
  }.property('model.horse.name'),

  horse: function() {
    return this.get('model.horse').id;
  }.property('model.horse'),

  actions: {
    newObject: function() {
      this.transitionToRoute('photos.new');
    }
  }
});
