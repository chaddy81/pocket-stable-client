import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serializeIntoHash: function(data, type, record, options) {
    var root = "poop";
    data[root] = this.serialize(record, options);
  }
});
