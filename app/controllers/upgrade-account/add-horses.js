import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['payment'],
  title: "Add Horses",
  isYearly: 1,
  counter: 1,

  horseCount: function() {
    var curHorseCount = this.get('model.total_horses'),
        retHorseCount;

    if (curHorseCount <= 5) {
      retHorseCount = 5;
    }else{
      retHorseCount = curHorseCount;
    }

    return retHorseCount;
  }.property('model.total_horses'),

  monthlyCost: function() {
    var horseCount = this.get('addNumHorses'),
        monthlyCost = 0;

    if (horseCount/5 === 1) {
      monthlyCost = 5;
    } else {
      monthlyCost = (((horseCount - 5) / 5) * 2) + 5;
    }
    return monthlyCost;
  }.property('addNumHorses'),

  yearlyCost: function() {
    var horseCount = this.get('addNumHorses'),
        yearlyCost = 0;

    if (horseCount/5 === 1) {
      yearlyCost = 50;
    } else {
      yearlyCost = (((horseCount - 5)/5) * 2) + 50;
    }

    return yearlyCost;
  }.property('addNumHorses'),

  addNumHorses: function() {
    var base = this.get('counter') * 5;
    var newCount = this.get('horseCount') + base;
    return newCount;
  }.property('horseCount', 'counter'),

  actions: {
    incrementCounter: function() {
      var curCounter = this.get('counter');
      this.set('counter', curCounter + 1);
    },

    decrementCounter: function() {
      var curCounter = this.get('counter');
      if (curCounter > 0) {
        this.set('counter', curCounter - 1);
      }
    },

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
      localStorage.setItem('horseCount', this.get('addNumHorses'));

      window.setTimeout(function() {
        self.transitionToRoute('upgrade-account.payment');
      }, 1000);
    },

    goBack: function(){
      this.transitionToRoute('upgrade-account');
    }
  }
});
