import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var Router = Ember.Router.extend(ApplicationRouteMixin, {
  location: PocketStableClientENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.resource('horses');
  this.resource('horse', { path: '/horses/:horse_id' }, function() {
    this.route('edit');
    this.route('weight-calculator');
    this.route('links');
    this.route('notes');
    this.route('documents');
    this.route('veterinarians');
    this.route('photos');
  });
  this.resource('photo', { path: '/horses/:horse_id/photos/:photo_id' });
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
