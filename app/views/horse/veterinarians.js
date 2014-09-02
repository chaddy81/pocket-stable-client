import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    Ember.$('.section_title').text('My Veterinarians');
  }
});