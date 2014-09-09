import Ember from 'ember';

export default Ember.View.extend({
  currentPath: (function() {
    var currentPath = this.get('controller.currentRoute') || '';
    currentPath = Ember.String.decamelize(currentPath);
    currentPath = currentPath.split('.').join('-');
    return currentPath;
  }).property('controller.currentPath')

});
