import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      horse: this.modelFor('horse'),
      documents: this.store.find('document', {'horse_id': this.modelFor('horse').id})
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

    this.render();
  }
});
