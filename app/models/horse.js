import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  nick_name: DS.attr(),
  sex: DS.attr(),
  fertility: DS.attr(),
  foaling_date: DS.attr(),
  color: DS.attr(),
  date_of_birth: DS.attr(),
  markings: DS.attr()
});
