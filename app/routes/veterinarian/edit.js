import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('veterinarian');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('veterinarian/edit');
  }
});
