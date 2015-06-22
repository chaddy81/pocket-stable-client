import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  title: 'My New Horse',

  actions: {
    createHorse: function() {
      var avatar = this.get('avatar'),
          name = this.get('name'),
          nick_name = this.get('nick_name'),
          sex = this.get('sex'),
          fertility = this.get('fertility'),
          foaling_date = this.get('foaling_date'),
          color = this.get('color'),
          date_of_birth = this.get('date_of_birth'),
          markings = this.get('markings'),
          breed = this.get('breed'),
          registration_number = this.get('registration_number'),
          org_numbers = this.get('org_numbers'),
          emergencies = this.get('emergencies'),
          comments = this.get('comments');

      var self = this;

      var horse = this.get('store').createRecord('horse', {
                avatar: avatar,
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
                org_numbers: org_numbers,
                emergencies: emergencies,
                comments: comments });

      horse.save().then(function() {
        self.get("controllers.application").send('notify', {
            title: "Success!",
            message: "You have successfully created a horse.",
            type: "alert-success"});
        self.transitionToRoute('horse', horse);
      }).catch(function(error) {
        self.get("controllers.application").send('notify', {
            title: "Error!",
            message: error.errors,
            type: "alert-error"});
      });
    },

    cancel: function() {
      this.transitionToRoute('horse.new');
    }
  }
});
