import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  start_time: DS.attr(),
  end_time: DS.attr(),
  content: DS.attr()
});
