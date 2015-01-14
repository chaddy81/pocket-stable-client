import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Payment",
  actions: {
    goBack: function(){
      this.transitionToRoute('upgrade-account');
    }
  }
});
