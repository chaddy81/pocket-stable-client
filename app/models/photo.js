import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  filename: DS.attr(),
  horse_id: DS.attr()
});
