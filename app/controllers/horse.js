import Ember from 'ember';

export default Ember.Controller.extend({
  foalingDate: function() {
    var foaling = this.get('model.foaling_date');

    return moment(foaling).format("MM/DD/YYYY");
  }.property('model.foaling_date'),

  birthDate: function() {
    var birth = this.get('model.date_of_birth');

    return moment(birth).format("MM/DD/YYYY");
  }.property('model.date_of_birth'),

});
