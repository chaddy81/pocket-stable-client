import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var Router = Ember.Router.extend(ApplicationRouteMixin, {
  location: PocketStableClientENV.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('horses');
  this.resource('horse', { path: '/horses/:horse_id' });
  this.route('signup');
  this.route('check-email');
  this.route('change-password');
  this.route('cancel-account');
  this.route('account-settings');
  this.route('feeding-records');
  this.route('payment');
  this.route('stable-information');
  this.route('upgrade-account');
  this.route('password-changed');
});

export default Router;
