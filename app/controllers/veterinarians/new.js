import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  actions: {
    createVet: function() {
      var name = this.get('name'),
          phone = this.get('phone');

      var self = this;

      var vet = this.get('store').createRecord('veterinarian', {
                name: name,
                phone: phone });

      vet.save().then(function() {
        self.get("controllers.application").send('notify', {
            title: "Success!",
            message: "You have successfully created: " + name,
            type: "alert-success"});
        self.transitionToRoute('veterinarians');
      },function(error) {
        console.log(error.responseText);
      });
    },

    cancel: function() {
      this.transitionToRoute('veterinarians');
    }
  }
});
