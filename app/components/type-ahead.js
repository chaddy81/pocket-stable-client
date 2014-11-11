import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.TextField.extend({
  tagName: 'input',

  typeAhead: function() {
    this._super();
    this.initTypeAhead();
  }.on('didInsertElement'),

  initTypeAhead: function() {
    $('#search').select2({
      formatResult: function(horse) { return horse.name; },
      formatSelection: function(horse) { return horse.name; },
      minimumInputLength: 1,
      multiple: true,
      ajax: {
        url: ENV.APP.host + '/api/search',
        dataType: 'json',
        quietMillis: 250,
        data: function (term) {
          return {
            q: term, // search term
          };
        },
        results: function (data) {
          console.log(data.search[0].name);

          return {results: data.search};
        },
        cache: true
      }
    });
  }
});
