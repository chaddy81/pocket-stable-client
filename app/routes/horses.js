import Ember from 'ember';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  title: "My Horses",

  model: function() {
    return this.store.find('horse');
  },

  renderTemplate: function() {
    this.render('basic-header-plus', {
      outlet: 'header'
    });

    this.render();
  }

});
