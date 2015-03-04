import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['horse', 'application'],

  title: function() {
    return this.get('model.nick_name');
  }.property('model.nick_name'),

  actions: {
    updateHorse: function() {
      var name = this.get('model.name'),
          nick_name = this.get('model.nick_name'),
          sex = this.get('model.sex'),
          fertility = this.get('model.fertility'),
          foaling_date = this.get('foaling_date'),
          color = this.get('model.color'),
          date_of_birth = this.get('date_of_birth'),
          markings = this.get('model.markings'),
          breed = this.get('model.breed'),
          registration_number = this.get('model.registration_number'),
          org_numbers = this.get('model.org_numbers'),
          emergencies = this.get('model.emergencies'),
          comments = this.get('model.comments');

      var self = this;

      this.get('store').find('horse', this.get('model.id')).then(function(horse) {
        horse.set('name', name);
        horse.set('nick_name', nick_name);
        horse.set('sex', sex);
        horse.set('fertility', fertility);
        horse.set('foaling_date', foaling_date);
        horse.set('color', color);
        horse.set('date_of_birth', date_of_birth);
        horse.set('markings', markings);
        horse.set('breed', breed);
        horse.set('registration_number', registration_number);
        horse.set('org_numbers', org_numbers);
        horse.set('emergencies', emergencies);
        horse.set('comments', comments);
        horse.save().then(function() {
          console.log('Saved');
          // self.get("controllers.application").send('notify', {
          //   title: "Success!",
          //   message: "You have successfully updated horse.",
          //   type: "alert-success"});
          self.transitionToRoute('horse', horse);
        }).catch(function(error) {
          console.log(error);
        });
      });
    },

    cancel: function() {
      this.transitionToRoute('horse.index');
    },

    delete: function() {
      var rec = this.get('model'),
          self = this;

      rec.deleteRecord();
      rec.save().then(function () {
        self.transitionToRoute('horses.index');
      });
    },
    goBack: function(){
      this.transitionToRoute('horse.index', this.get('model.id'));
    }
  }
});
