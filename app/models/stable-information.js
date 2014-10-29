import DS from 'ember-data';

export default DS.Model.extend({
  last_farrier: DS.attr(),
  farrier_name: DS.attr(),
  farrier_phone: DS.attr(),
  farrier_interval: DS.attr(),
  hay: DS.attr(),
  feed: DS.attr(),
  supplements: DS.attr(),
  horses: DS.belongsTo('horse', {embedded: 'always'})
});
