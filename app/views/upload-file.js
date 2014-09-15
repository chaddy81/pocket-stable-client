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
        console.log(e);
        var fileToUpload = e.srcElement.result;
        Ember.run(function() {
            that.set('file', fileToUpload);
        });
      };
      return reader.readAsDataURL(e.target.files[0]);
  }
});
