import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('health-information', this.modelFor('horse').id);
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-edit', {
      outlet: 'header',
      into: 'application'
    });

    this.render();
  }
});