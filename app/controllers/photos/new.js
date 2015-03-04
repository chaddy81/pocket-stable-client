import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  title: 'Upload Photo',

  actions: {
    createPhoto: function() {
      var image = this.get('photo'),
          filename = $('input[name="filename"]').val(),
          horse_id = this.get('model.horse').id;

      var self = this;

      var photo = this.get('store').createRecord('photo', {
                image: image,
                filename: filename,
                horse_id: horse_id});

      photo.save().then(function() {
        self.transitionToRoute('photos.index');
      }).catch(function(error) {
        self.get("controllers.application").send('notify', {
            title: "Error!",
            message: JSON.parse(error.responseText).errors,
            type: "alert-error"});
      });
    },

    cancel: function() {
      this.transitionToRoute('photos.index');
    },

    goBack: function(){
      this.transitionToRoute('horse.index', this.get('model.horse.id'));
    }
  }
});
