import Ember from 'ember';

export default Ember.TextField.extend({
  tagName: 'input',
  attributeBindings: ['name'],
  type: 'file',
  file: null,
  change: function (e) {
      var reader = new FileReader(),
      that = this;
      reader.onload = function (e) {
        var fileToUpload = e.srcElement.result;
        Ember.run(function() {
            that.set('file', fileToUpload);
        });
      };
      $('[name="filename"]').val(e.target.files[0].name);
      return reader.readAsDataURL(e.target.files[0]);
  }
});
