import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createHorse: function() {
      console.log(this.get('name'));
      var name = this.get('name'),
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
          comments = this.get('model.comments');

      var horse = this.get('store').createRecord('horse', {
                name: name,
                nick_name: nick_name,
                sex: sex,
                fertility: fertility,
                foaling_date: foaling_date,
                color: color,
                date_of_birth: date_of_birth,
                markings: markings,
                breed: breed,
                registration_number: registration_number,
                org_number: org_number,
                emergencies: emergencies,
                comments: comments });

      horse.save().then(function(data) {
        console.log(data);
      },function(error) {
        console.log(error.responseText);
      });
    },

    cancel: function() {
      this.transitionTo('horse.new');
    }
  }
});
