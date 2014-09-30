import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('document', params.id);
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
