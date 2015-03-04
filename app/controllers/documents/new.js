import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['horses', 'application'],
  title: 'Add Document',
  actions: {
    createDocument: function() {
      var name = this.get('name'),
          file = this.get('file'),
          filename = $('input[name="filename"]').val(),
          horses = this.get('horses');

      var self = this;

      var doc = this.get('store').createRecord('document', {
                name: name,
                file: file,
                filename: filename,
                horses: horses });

      doc.save().then(function() {
        self.transitionToRoute('document', doc);
      }).catch(function(error) {
        self.get("controllers.application").send('notify', {
            title: "Error!",
            message: JSON.parse(error.responseText).errors,
            type: "alert-error"});
      });
    },

    cancel: function() {
      this.transitionToRoute('documents.new');
    },

    goBack: function(){
      this.transitionToRoute('documents.index');
    }
  }
});
