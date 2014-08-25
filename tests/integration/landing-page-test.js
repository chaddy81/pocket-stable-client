import Ember from 'ember';
import startApp from 'pocket-stable-client/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    // Ember.run(App, 'destroy');
  }
});

test('Should have login form', function() {
  visit('/').then(function() {
    equal(find('div.login_form').length, 1);
  });
});