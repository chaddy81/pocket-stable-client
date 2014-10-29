import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('forgot-password');
  this.route('reset-password');

  this.resource('notes', function() {
    this.route('new');
  });

  this.resource('note', { path: '/notes/:note_id' }, function() {
    this.route('edit');
  });

  this.resource('horses', function() {
    this.route('new');
  });

  this.resource('horse', { path: '/horses/:horse_id' }, function() {
    this.route('edit');
    this.route('weight-calculator');
    this.route('weight-history');
    this.route('links');
    this.route('photos');
    this.resource('stable-information', { path: 'stable-information' }, function() {
      this.route('edit');
    });
    this.route('health-information');
    this.route('feeding-records');
  });

  this.resource('veterinarians', function() {
    this.route('new');
  });

  this.resource('veterinarian', { path: 'veterinarians/:vet_id' }, function() {
    this.route('edit');
  });

  this.resource('photo', { path: '/horses/:horse_id/photos/:photo_id' });

  this.resource('documents', function() {
    this.route('new');
  });

  this.resource('document', { path: '/documents/:id' }, function() {
    this.route('edit');
  });

  this.route('signup');
  this.route('check-email');
  this.route('change-password');
  this.route('cancel-account');
  this.route('account-settings');
  this.route('payment');
  this.route('stable-information');
  this.route('upgrade-account');
  this.route('password-changed');
});

export default Router;
