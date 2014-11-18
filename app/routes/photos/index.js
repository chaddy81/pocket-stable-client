import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      horse: this.modelFor('horse'),
      photos: this.store.find('photo', {horse: this.modelFor('horse').id})
    });
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('basic-header-plus', {
      outlet: 'header',
      into: 'application'
    });

    this.render('photos/index');
  }
});
