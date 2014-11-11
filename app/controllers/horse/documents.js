import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.horse.nick_name');
  }.property('model.horse.nick_name')
});