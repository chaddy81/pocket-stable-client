import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['horse', 'application'],

  actions: {
    submitWeight: function() {
      var weight = this.get('weight');

      var self = this;

      var newWeight = this.get('store').createRecord('weight', {weight: weight, horse_id: this.get('model.horse')});
      newWeight.save().then(function() {
        self.get("controllers.application").notify({
            title: "Success!",
            message: "Weight successfully recorded.",
            type: "alert-success"});
        self.transitionToRoute('horse.weight-history', self.get('model.horse'));
      }).catch(function(error) {
        console.log(error);
      });
    }
  },

  weightObserver: function() {
    var girth = parseFloat(this.get('girth')),
        length = parseFloat(this.get('length'));

    var guessWeight = parseInt((((girth * girth) * length) / 330) + 50);

    this.set('weight', guessWeight);
  }.observes('girth', 'length'),

});
