import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('document');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-plus', {
      outlet: 'header',
      into: 'application'
    });

    this.render('documents/index');
  }
});
