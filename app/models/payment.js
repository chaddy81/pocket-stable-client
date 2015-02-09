import DS from 'ember-data';

export default DS.Model.extend({
  card_last4: DS.attr(),
  exp_month: DS.attr(),
  exp_year: DS.attr(),
  cost: DS.attr(),
  total_horses: DS.attr(),
  charge_interval: DS.attr(),
  temp_cost: DS.attr(),
  stripe_token: DS.attr(),
  upgrade_account: DS.belongsTo('upgrade-account')
});