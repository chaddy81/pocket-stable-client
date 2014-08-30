import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(controller, model) {
    this.render('back-header', {
      outlet: 'header'
    });

    this.render();
  }
});
