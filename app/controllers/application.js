import Ember from 'ember';

export default Ember.Controller.extend({
  full_name: function() {
    var user = this.store.find('user', session.get('user_id'));
    return user.get('full_name');
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
