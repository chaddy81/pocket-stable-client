import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      horse: this.modelFor('horse'),
      documents: this.store.find('document', {'horse_id': this.modelFor('horse').id})
    });
  },

  setupController: function (controller, model) {
    controller.set('model', model);
  },

  renderTemplate: function() {
    this.render('back-header-plus', {
      outlet: 'header',
      into: 'application'
    });

    this.render();
  }
});
