import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.horse.nick_name');
  }.property('model.horse.nick_name'),

  actions: {
    goBack: function(){
      this.transitionToRoute('horse.index', this.get('model.horse.id'));
    },

    newObject: function() {
      this.transitionToRoute('documents.new');
    }
  }
});