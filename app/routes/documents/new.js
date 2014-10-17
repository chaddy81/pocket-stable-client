import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('document');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('horses').set('content', this.store.findAll('horse'));
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render();
  }
});
