import Ember from 'ember';

export default Ember.Controller.extend({
  farrierDate: function() {
    var farrier_date = this.get('model.last_farrier');

    return moment(farrier_date).format("MM/DD/YYYY");
  }.property('model.last_farrier')
});
