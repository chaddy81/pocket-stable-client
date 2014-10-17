import Ember from 'ember';

export default Ember.ArrayController.extend({

  filteredContent: function() {
    return this.get('content').filter(function(item) {
      console.log(item);
      return !(item.get('isDirty'));
    });
  }.property('content.@each')
});