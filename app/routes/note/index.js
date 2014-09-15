import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('note');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-edit', {
      outlet: 'header'
    });

    this.render();
  }
});
