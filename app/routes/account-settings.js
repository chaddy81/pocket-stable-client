import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(controller, model) {
    this.render('basic-header', {
      outlet: 'header'
    });

    this.render();
  }

});
