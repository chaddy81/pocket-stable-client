import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    var root = Ember.String.underscore(type.typeKey);
    data[root] = this.serialize(record, options);
  }
});
