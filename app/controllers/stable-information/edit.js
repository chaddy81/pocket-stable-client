import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  farrierDate: function() {
    var farrier_date = this.get('model.last_farrier');

    return moment(farrier_date).format("MM/DD/YYYY");
  }.property('model.last_farrier'),

  title: function() {
    return this.get('model.horse.name');
  }.property('model.horse.name'),

  actions: {
    editStable: function() {
      var last_farrier = this.get('model.last_farrier'),
          farrier_name = this.get('model.farrier_name'),
          farrier_phone = this.get('model.farrier_phone'),
          farrier_interval = this.get('model.farrier_interval'),
          hay = this.get('model.hay'),
          feed = this.get('model.feed'),
          supplements = this.get('model.supplements');

      var self = this;

      this.store.find('stable-information', this.get('model').id).then(function(stable) {
        stable.set('last_farrier', last_farrier);
        stable.set('farrier_name', farrier_name);
        stable.set('farrier_phone', farrier_phone);
        stable.set('farrier_interval', farrier_interval);
        stable.set('hay', hay);
        stable.set('feed', feed);
        stable.set('supplements', supplements);

        console.log(stable);

        stable.save().then(function() {
          self.get("controllers.application").notify({
            title: "Success!",
            message: "Stable Information successfully updated.",
            type: "alert-success"});
          self.transitionToRoute('stable-information.index');
        }).catch(function(error) {
          console.log(error);
        });
      });
    },

    cancel: function() {
      this.transitionToRoute('stable-information.index');
    }
  }
});
