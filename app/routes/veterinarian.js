import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('veterinarian', params.vet_id);
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
