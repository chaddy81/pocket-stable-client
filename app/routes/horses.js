import Ember from 'ember';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  title: "My Horses",

  model: function() {
    return this.store.findAll('horse');
  }

});
