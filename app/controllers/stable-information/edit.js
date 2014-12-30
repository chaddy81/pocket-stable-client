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
      var last_farrier = this.get('model.stable_info.last_farrier'),
          farrier_name = this.get('model.stable_info.farrier_name'),
          farrier_phone = this.get('model.stable_info.farrier_phone'),
          farrier_interval = this.get('model.stable_info.farrier_interval'),
          hay = this.get('model.stable_info.hay'),
          feed = this.get('model.stable_info.feed'),
          supplements = this.get('model.stable_info.supplements');

      console.log(farrier_interval);

      var self = this;

      this.store.find('stable-information', this.get('model.stable_info').id).then(function(stable) {
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
    },

    goBack: function(){
      this.transitionToRoute('stable-information.index', this.get('model').id);
    }
  }
});
