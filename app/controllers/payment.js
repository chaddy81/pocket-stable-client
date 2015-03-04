import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  title: "Payment",
  counter: 1,

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

  cost: function() {
    var cost = this.get('model.temp_cost');
    var formatted = Math.floor(cost);
    return formatted;
  }.property('model.temp_cost'),

  interval: function() {
    var interval = this.get('model.charge_interval');
    // var formatted = interval.toUpperCase() + interval.slice(1);
    // return formatted;
    return interval;
  }.property('model.charge_interval'),

  card_number: function() {
    var cn = this.get('model.card_last4');
    if (typeof(cn) !== 'undefined' && cn != null) {
      return "**** **** **** " + cn;
    }
  }.property('model.card_last4'),

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
          var newHorseCount = me.get('newHorseCount');

          var self = me;

          console.log(me.get('model').length);

          me.get('store').find('payment', me.get('model.id')).then(function(payment) {
            payment.set('stripe_token', stripe_token);
            payment.set('total_horses', newHorseCount);
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
