import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNote: function() {
      var title = this.get('title'),
          date = this.get('date'),
          start_time = this.get('start_time'),
          end_time = this.get('end_time'),
          content = this.get('content');

      var self = this;

      var note = this.get('store').createRecord('note', {
                title: title,
                date: date,
                start_time: start_time,
                end_time: end_time,
                content: content});

      note.save().then(function() {
        self.transitionToRoute('note', note);
      },function(error) {
        console.log(error.responseText);
      });
    },

    cancel: function() {
      this.transitionTo('note.new');
    }
  }
});
