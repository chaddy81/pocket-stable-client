$(function() {
  var horses = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: ENV.APP.host + '/api/search?q=%QUERY'
  });

  horses.initialize();

  $('#search').typeahead(null, {
    name: 'horses',
    displayKey: 'value',
    source: horses.ttAdapter()
  });
});