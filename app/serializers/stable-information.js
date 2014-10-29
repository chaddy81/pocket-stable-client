import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    var root = Ember.String.underscore(type.typeKey);
    data[root] = this.serialize(record, options);
  },

  serialize: function(record, options) {
    var json = this._super(record, options);

    delete json.horses;

    return json;
  }
});
