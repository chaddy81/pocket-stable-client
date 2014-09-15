import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('note');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-plus', {
      outlet: 'header'
    });

    this.render();
  }
});
