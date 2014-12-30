import Ember from 'ember';

export default Ember.ArrayController.extend({
  title: "Documents",

  actions: {
    newObject: function() {
      this.transitionToRoute('documents.new');
    },

    goBack: function(){
      this.transitionToRoute('horses.index');
    }
  }
});
