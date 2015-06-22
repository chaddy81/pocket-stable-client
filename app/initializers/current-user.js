import Ember from 'ember';
import Session from 'simple-auth/session';

var SessionWithCurrentUser = Session.extend({
  currentUser: function() {
    var self = this;
    var userId = this.get('user_id');
    if (!Ember.isEmpty(userId)) {
      return self.container.lookup("store:main").find("user", userId).then(function(user) {
        self.set("currentUser", user);
      });
    }
  }.property('user_id')
});

export default {
  name: 'customize-session',
  initialize: function(container) {
    container.register('session:withCurrentUser', SessionWithCurrentUser);
  }
};