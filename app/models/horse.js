import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  nick_name: DS.attr(),
  sex: DS.attr(),
  fertility: DS.attr(),
  foaling_date: DS.attr(),
  color: DS.attr(),
  date_of_birth: DS.attr(),
  markings: DS.attr(),
  breed: DS.attr(),
  registration_number: DS.attr(),
  org_number: DS.attr(),
  emergencies: DS.attr(),
  comments: DS.attr()
});
