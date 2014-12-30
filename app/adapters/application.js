import DS from 'ember-data';
import ENV from '../config/environment';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    return Ember.String.pluralize(decamelized);
  },
  namespace: 'api',
  host: ENV.APP.host
});