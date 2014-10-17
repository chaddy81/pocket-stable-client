import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('document');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('document/index');
  }

});