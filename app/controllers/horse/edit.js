import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['horse'],

  actions: {
    updateHorse: function() {
      var name = this.get('model.name'),
          nick_name = this.get('model.nick_name'),
          sex = this.get('model.sex'),
          fertility = this.get('model.fertility'),
          foaling_date = this.get('model.foaling_date'),
          color = this.get('model.color'),
          date_of_birth = this.get('model.date_of_birth'),
          markings = this.get('model.markings'),
          breed = this.get('model.breed'),
          registration_number = this.get('model.registration_number'),
          org_number = this.get('model.org_number'),
          emergencies = this.get('model.emergencies'),
          comments = this.get('model.comments'),
          sessionHorse = this.get('session.horse');

      var self = this;

      var horse = this.get('store').find('horse', sessionHorse).then(function(horse, error) {
        horse.set('name', name);
        horse.set('nick_name', nick_name);
        horse.set('sex', sex);
        horse.set('fertility', fertility);
        horse.set('foaling_date', foaling_date);
        horse.set('color', color);
        horse.set('date_of_birth', date_of_birth);
        horse.set('markings', markings);
        horse.set('breed', breed);
        horse.save().then(function(data) {
          self.transitionToRoute('horse', horse);
        }).catch(function(error) {
          console.log(error);
        })
      });
    },

    cancel: function() {
      this.transitionTo('horse.index');
    }
  }
});