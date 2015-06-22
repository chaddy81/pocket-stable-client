/* global require, module */

require('newrelic');

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    enabled: false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/moment/moment.js');
app.import('bower_components/ember-date-picker/dist/ember-date-picker.js');
app.import('bower_components/ember-date-picker/dist/ember-date-picker.css');
app.import('bower_components/ember-spin-box/dist/ember-spin-box.js');
app.import('bower_components/ember-spin-box/dist/ember-spin-box.css');
app.import('bower_components/lodash/lodash.js');
app.import('bower_components/d3/d3.js');
app.import('bower_components/ember-charts/dist/ember-charts.js');
app.import('bower_components/ember-charts/dist/ember-charts.css');
app.import('bower_components/select2/dist/js/select2.js');
app.import('bower_components/stripe.js/');
app.import('bower_components/jquery.payment/lib/jquery.payment.js');

module.exports = app.toTree();
