import Ember from 'ember';

export default Ember.Controller.extend({
  dataArray: function() {
    var data = this.get('model.weights'),
        dataArray = [];
    console.log(data);

    data.forEach(function(num, index) {
      dataArray.push({'value': num._data.weight, 'label': moment(num._data.created_at).format('MMMM Do YYYY, h:mm:ss a')});
    });

    return dataArray;
  }.property('model.weights')
});
