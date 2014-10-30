import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('health-information', this.modelFor('horse').id);
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('health-information/edit');
  }
});
