import DS from 'ember-data';

export default DS.Model.extend({
  last_dentist: DS.attr(),
  dentist_name: DS.attr(),
  dentist_phone: DS.attr(),
  dentist_interval: DS.attr(),
  last_coggins: DS.attr(),
  last_deworming: DS.attr(),
  last_tetanus: DS.attr(),
  last_rabies: DS.attr(),
  last_vew: DS.attr(),
  last_botulism: DS.attr(),
  last_potomac: DS.attr(),
  last_strangles: DS.attr(),
  last_anthrax: DS.attr(),
  last_rhino_flu: DS.attr(),
  rhino_interval: DS.attr(),
  last_west_nile: DS.attr(),
  west_nile_interval: DS.attr(),
  other_vacc: DS.attr(),
  health_comments: DS.attr(),
  horses: DS.belongsTo('horse', {embedded: 'always'})
});