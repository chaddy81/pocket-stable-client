import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  current_password: DS.attr(),
  password: DS.attr(),
  password_confirmation: DS.attr()
});