import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['photos'],

  title: function() {
    var filename = this.get('model.filename');
    return (filename.substr(0, filename.lastIndexOf('.')) || filename).replace(/[^a-z0-9\s]/gi, ' ');
  }.property('model.filename'),

  actions: {
    removeDocument: function() {
      var rec = this.get('model'),
          self = this;

      rec.deleteRecord();
      rec.save().then(function () {
        self.transitionToRoute('photos.index');
      });
    },

    cancel: function() {
      this.transitionToRoute('photos.index');
    }
  }
});
