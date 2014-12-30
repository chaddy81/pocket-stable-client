import Ember from 'ember';

export default Ember.Controller.extend({
  title: function() {
    return this.get('model.title');
  }.property('model.title'),

  formattedDate: function() {
    var date = this.get('model.date');

    return moment(date).format("dddd, MMMM D, YYYY");
  }.property('model.date'),

  formattedTime: function() {
    var start = this.get('model.start_time'),
        end = this.get('model.end_time'),
        newTime = '';

    if(start && end) {
      newTime = moment(start).format('h:mmA') + ' - ' + moment(end).format('h:mmA');
    }else{
      newTime = moment(start).format('h:mmA');
    }

    return newTime;
  }.property('model.start_time', 'model.end_time'),

  actions: {
    edit: function() {
      this.transitionToRoute('note.edit');
    },

    goBack: function(){
      this.transitionToRoute('notes.index');
    }
  }
});
