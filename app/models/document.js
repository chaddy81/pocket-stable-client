import DS from 'ember-data';

var Document = DS.Model.extend({
  name: DS.attr(),
  file: DS.attr(),
  tags: DS.attr(),
  filename: DS.attr()
});

// Document.reopenClass({
//   FIXTURES: [
//     { id: 1, name: 'Test 1', file: 'document.pdf', tags: 'this, that, other', filename: 'test.jpg' },
//     { id: 2, name: 'Test 2', file: 'document.pdf', tags: 'this, that, other', filename: 'test.jpg' }
//   ]
// });

export default Document;