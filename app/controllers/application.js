import Ember from 'ember';

export default Ember.Controller.extend({
  full_name: function() {
    var full_name = this.get('session').user_first_name + ' ' + this.get('session').user_last_name;
    return full_name;
  },
  title: function() {
    return this.get('title');
  },

  actions: {

    closeNotification: function() {
      var notification = this.get('notification');
      if(notification) {
        if(notification.persists) {
          console.log("Notification detected, clearing alert notification after next transition");
          notification.persists = null;
        } else {
          console.log("Notification detected, clearing alert notification now");
          this.set('notification', null);
        }
      }
    },

    notify: function(options) {
      this.set('notification', options);
    }
  }
});
