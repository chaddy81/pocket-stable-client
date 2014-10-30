import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('horse');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('horse/edit');
  }
});
