import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  needs: ['upgrade-account/index','application'],
  title: "Payment",
  counter: 1,
  pubKey: function() {
    console.log(ENV.APP.STRIPE_PUBLISHABLE);
    return ENV.APP.STRIPE_PUBLISHABLE;
  }.property('ENV.APP.STRIPE_PUBLISHABLE'),

  cost: function() {
    var cost = localStorage.getItem('cost');
    var formatted = Math.floor(cost);
    return formatted;
  }.property(localStorage.getItem('cost')),

  newHorseCount: function() {
    var curCost = this.get('model.cost'),
        curInterval = this.get('model.charge_interval'),
        basePrice = 0,
        count = 0;

    if (curInterval === 'monthly') {
      basePrice = 5;
    } else if (curInterval === 'yearly') {
      basePrice = 50;
    }

    if (basePrice === curCost) {
      return 5;
    }else{
      count = (curCost - basePrice) / 2;
      return count * 5;
    }
  }.property('model.cost', 'model.charge_interval'),

  addNumHorses: function() {
    var base = this.get('counter') * 5;
    var newCount = this.get('horseCount') + base;
    return newCount;
  }.property('horseCount', 'counter'),

  interval: function() {
    var interval = localStorage.getItem('interval');
    var formatted = interval.substr(0, 1).toUpperCase() + interval.slice(1);
    return formatted;
  }.property(localStorage.getItem('interval')),

  actions: {
    createPayment: function() {
      var me = this;
      var stripeResponseHandler = function(status, response) {
        var $form = $('#payment-form');

        if (response.error) {
          // Show the errors on the form
          $form.find('.payment-errors').text(response.error.message);
          $form.find('button').prop('disabled', false);
        } else {
          // response contains id and card, which contains additional card details
          var token = response.id;
          var last4 = response.card.last4;
          // Insert the token into the form so it gets submitted to the server
          $form.find('#stripe_token').val(token);

          var stripe_token = $form.find('#stripe_token').val();

          var self = me;

          me.get('store').find('payment', me.get('model.id')).then(function(payment) {
            payment.set('stripe_token', stripe_token);
            payment.set('total_horses', localStorage.getItem('horseCount'));
            payment.set('cost', localStorage.getItem('cost'));
            payment.set('charge_interval', localStorage.getItem('interval'));
            payment.set('card_last4', last4);

            payment.save().then(function() {
              self.get("controllers.application").send('notify', {
                  title: "Success!",
                  message: "Payment Created",
                  type: "alert-success"});

              self.transitionToRoute('horses.index');
            }).catch(function(error) {
              console.log(error);
            });
          });
        }
      };

      var $form = $('#payment-form');

      // Disable the submit button to prevent repeated clicks
      $form.find('button').prop('disabled', true);

      Stripe.card.createToken($form, stripeResponseHandler);
    },

    goBack: function(){
      this.transitionToRoute('upgrade-account');
    }
  }
});
