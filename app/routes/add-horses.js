import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('back-header', {
      outlet: 'header',
      into: 'application'
    });

    this.render('add-horses');
  }
});
