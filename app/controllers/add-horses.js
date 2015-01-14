import Ember from 'ember';

export default Ember.Controller.extend({
  title: "Add Horses",
  actions: {
    goBack: function(){
      this.transitionToRoute('upgrade-account');
    }
  }
});
