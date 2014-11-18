import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('photo', params.photo_id);
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-edit', {
      outlet: 'header',
      into: 'application'
    });

    this.render('photo/index');
  }
});
