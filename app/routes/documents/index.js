import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('document');
  },

  renderTemplate: function() {
    this.render('basic-header_plus', {
      outlet: 'header',
      into: 'application'
    });

    this.render('documents/index');
  }
});
