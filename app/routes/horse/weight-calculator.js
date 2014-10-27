import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      horse: this.modelFor('horse'),
      weights: this.store.find('weight', {'horse_id': this.modelFor('horse').id})
    });
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('horse/weight-calculator');
  }
});