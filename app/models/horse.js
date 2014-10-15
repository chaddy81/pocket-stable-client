import DS from 'ember-data';

export default DS.Model.extend({
  avatar: DS.attr(),
  name: DS.attr(),
  nick_name: DS.attr(),
  breed: DS.attr(),
  sex: DS.attr(),
  fertility: DS.attr(),
  foaling_date: DS.attr(),
  color: DS.attr(),
  date_of_birth: DS.attr(),
  markings: DS.attr(),
  registration_number: DS.attr(),
  org_numbers: DS.attr(),
  emergencies: DS.attr(),
  comments: DS.attr(),
  avatar_thumb_url: DS.attr(),
  avatar_profile_url: DS.attr()
});
