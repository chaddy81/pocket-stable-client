Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
    jqXHR.setRequestHeader("Authorization", 'test');
});