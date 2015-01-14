import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Upgrade Account",
  actions: {
    goBack: function(){
      this.transitionToRoute('account-settings');
    }
  }
});
