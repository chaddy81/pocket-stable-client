import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function () {
    return this.modelFor('veterinarian');
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('veterinarian/edit');
  }
});
