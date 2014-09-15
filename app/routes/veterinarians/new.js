import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('basic-header', {
      outlet: 'header'
    });

    this.render();
  }
});
