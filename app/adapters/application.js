import DS from 'ember-data';
import ENV from '../config/environment';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  pathForType: function(type) {
    var decamelized = Ember.String.decamelize(type);
    return Ember.String.pluralize(decamelized);
  },
  namespace: 'api',
  host: ENV.APP.host,
  ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);

    if (jqXHR && jqXHR.status === 422) {
      var jsonErrors = Ember.$.parseJSON(jqXHR.responseText);
      return new DS.InvalidError(jsonErrors);
    } else {
      return error;
    }
  }
});