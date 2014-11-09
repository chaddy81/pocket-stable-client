import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.horse.name');
  }.property('model.horse.name'),

  farrierDate: function() {
    var farrier_date = this.get('model.last_farrier');

    return moment(farrier_date).format("MM/DD/YYYY");
  }.property('model.last_farrier'),
  actions: {
    edit: function() {
      this.transitionToRoute('stable-information.edit');
    }
  }
});
