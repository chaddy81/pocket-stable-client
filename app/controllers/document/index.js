import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['document', 'application'],

  actions: {
    removeDocument: function() {
      var rec = this.get('model'),
          self = this;

      rec.deleteRecord();
      rec.save().then(function () {
        self.transitionToRoute('documents.index');
      });
    }
  }
});
