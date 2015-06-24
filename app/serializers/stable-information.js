import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  serializeIntoHash: function(data, type, record) {
    var root = Ember.String.underscore(type.typeKey);
    data[root] = this.serialize(record);
  },

  serialize: function(record) {
    var json = this._super(record);
    delete json.horses;

    return json;
  }
});
