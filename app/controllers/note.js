import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Note",

  actions: {
    edit: function() {
      this.transitionToRoute('note.edit');
    }
  }
});
