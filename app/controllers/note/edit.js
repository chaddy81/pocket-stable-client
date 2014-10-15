import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['note', 'application'],

  actions: {
    updateNote: function() {
      var title = this.get('model.title'),
          date = this.get('model.date'),
          start_time = this.get('model.start_time'),
          end_time = this.get('model.end_time'),
          content = this.get('model.content');

      var self = this;

      var note = this.get('store').find('note', this.get('model.id')).then(function(note, error) {
        note.set('title', title);
        note.set('date', date);
        note.set('start_time', start_time);
        note.set('end_time', end_time);
        note.set('content', content);

        note.save().then(function() {
          self.get("controllers.application").notify({
            title: "Success!",
            message: "You have successfully updated note.",
            type: "alert-success"});
          self.transitionToRoute('note', note);
        }).catch(function(error) {
          console.log(error);
        });
      });
    },

    cancel: function() {
      this.transitionToRoute('note.index');
    }
  }
});