import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.name');
  }.property('model.name'),

  actions: {
    edit: function() {
      this.transitionToRoute('veterinarian.edit');
    },
    removeVeterinarian: function() {
      var rec = this.get('model'),
          self = this;

      rec.deleteRecord();
      rec.save().then(function () {
        self.transitionToRoute('veterinarians.index');
      });
    }
  }
});
