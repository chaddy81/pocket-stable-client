import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('document');
  },

  renderTemplate: function() {
    this.render('basic-header_plus', {
      outlet: 'header',
      into: 'application'
    });

    this.render('documents/index');
  }
});
