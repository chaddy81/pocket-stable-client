import { test, moduleFor } from 'ember-qunit';

moduleFor('route:note/index', 'NoteIndexRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});
