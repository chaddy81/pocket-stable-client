import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  title: function() {
    return this.get('model.name');
  }.property('model.name'),

  actions: {
    editVet: function() {
      var name = this.get('model.name'),
          phone = this.get('model.phone');

      var self = this;

      this.get('store').find('veterinarian', this.get('model.id')).then(function(vet) {
        vet.set('name', name);
        vet.set('phone', phone);

        vet.save().then(function() {
          self.get("controllers.application").notify({
              title: "Success!",
              message: "You have successfully updated: " + name,
              type: "alert-success"});
          self.transitionToRoute('veterinarian', vet);
        }).catch(function(error) {
          console.log(error);
        });
      });
    },

    goBack: function(){
      this.transitionToRoute('veterinarian.index', this.get('model.id'));
    }
  }
});
