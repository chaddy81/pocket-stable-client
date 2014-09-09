import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('horse', params.horse_id);
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header', {
      outlet: 'header'
    });

    this.render();
  }

});