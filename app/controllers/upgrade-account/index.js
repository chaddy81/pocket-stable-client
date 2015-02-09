import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  title: "Upgrade Account",
  isYearly: 1,
  horses: 2,

  horseCount: function() {
    var curHorseCount = this.get('model.total_horses'),
        horses = this.get('horses'),
        retHorseCount;

    if (curHorseCount <= 5) {
      retHorseCount = 5;
    }else{
      retHorseCount = curHorseCount;
    }

    return retHorseCount;
  }.property('model.total_horses'),

  monthlyCost: function() {
    var horseCount = this.get('model.total_horses'),
        monthlyCost = 0;

    if (horseCount <= 5) {
      monthlyCost = 5;
    } else {
      monthlyCost = (((horseCount - 5) / 5) * 2) + 5;
    }

    return monthlyCost;
  }.property('model.total_horses'),

  yearlyCost: function() {
    var horseCount = this.get('model.total_horses'),
        yearlyCost = 0;

    if (horseCount <= 5) {
      yearlyCost = 50;
    } else {
      yearlyCost = (((horseCount - 5) / 5) * 2) + 50;
    }

    return yearlyCost;
  }.property('model.total_horses'),

  actions: {
    updatePayment: function() {
      var yearly = this.get('isYearly'),
          monthlyCost = this.get('monthlyCost'),
          yearlyCost = this.get('yearlyCost'),
          charge_interval,
          cost;
      if (yearly === 0) {
        charge_interval = 'monthly';
        cost = monthlyCost;
      }else{
        charge_interval = 'yearly';
        cost = yearlyCost;
      }

      var self = this;

      localStorage.setItem('interval', charge_interval);
      localStorage.setItem('cost', cost);
      localStorage.setItem('horseCount', this.get('horseCount'));

      window.setTimeout(function() {
        self.transitionToRoute('upgrade-account.payment');
      }, 1000);
    },

    goBack: function() {
      this.transitionToRoute('account-settings');
    }
  }
});
