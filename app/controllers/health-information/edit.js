import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  actions: {
    editHealth: function() {
      var last_dentist = this.get('model.last_dentist'),
          dentist_name = this.get('model.dentist_name'),
          dentist_phone = this.get('model.dentist_phone'),
          dentist_interval = this.get('model.dentist_interval'),
          last_coggins = this.get('model.last_coggins'),
          last_deworming = this.get('model.last_deworming'),
          last_tetanus = this.get('model.last_tetanus'),
          last_rabies = this.get('model.last_rabies'),
          last_vew = this.get('model.last_vew'),
          last_botulism = this.get('model.last_botulism'),
          last_potomac = this.get('model.last_potomac'),
          last_strangles = this.get('model.last_strangles'),
          last_anthrax = this.get('model.last_anthrax'),
          last_rhino_flu = this.get('model.last_rhino_flu'),
          rhino_interval = this.get('model.rhino_interval'),
          last_west_nile = this.get('model.last_west_nile'),
          west_nile_interval = this.get('model.west_nile_interval'),
          other_vacc = this.get('model.other_vacc'),
          health_comments = this.get('model.health_comments');


      var self = this;

      this.store.find('health-information', this.get('model').id).then(function(health) {

        health.set('last_dentist', last_dentist);
        health.set('dentist_name', dentist_name);
        health.set('dentist_phone', dentist_phone);
        health.set('dentist_interval', dentist_interval);
        health.set('last_coggins', last_coggins);
        health.set('last_deworming', last_deworming);
        health.set('last_tetanus', last_tetanus);
        health.set('last_rabies', last_rabies);
        health.set('last_vew', last_vew);
        health.set('last_botulism', last_botulism);
        health.set('last_potomac', last_potomac);
        health.set('last_strangles', last_strangles);
        health.set('last_anthrax', last_anthrax);
        health.set('last_rhino_flu', last_rhino_flu);
        health.set('rhino_interval', rhino_interval);
        health.set('last_west_nile', last_west_nile);
        health.set('west_nile_interval', west_nile_interval);
        health.set('other_vacc', other_vacc);
        health.set('health_comments', health_comments);

        health.save().then(function() {
          self.get("controllers.application").notify({
            title: "Success!",
            message: "Health Information successfully updated.",
            type: "alert-success"});
          self.transitionToRoute('health-information.index');
        }).catch(function(error) {
          console.log(error);
        });
      });
    },

    cancel: function() {
      this.transitionToRoute('health-information.index');
    }
  }
});
