import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  file: DS.attr(),
  tags: DS.attr(),
  filename: DS.attr(),
  horses: DS.attr()
});
