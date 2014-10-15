import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['horses'],
  actions: {
    createDocument: function() {
      alert($('input[name="filename"]').val());
      var name = this.get('name'),
          file = this.get('file'),
          filename = $('input[name="filename"]').val(),
          tags = this.get('tags');

      var self = this;

      var doc = this.get('store').createRecord('document', {
                name: name,
                file: file,
                filename: filename,
                tags: tags });

      doc.save().then(function() {
        // self.set(horse,'');
        self.transitionToRoute('document', doc);
      },function(error) {
        console.log(error.responseText);
      });
    },

    cancel: function() {
      this.transitionToRoute('documents.new');
    }
  }
});