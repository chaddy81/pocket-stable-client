import DS from 'ember-data';

import localStorage from 'simple-auth/stores/local-storage';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000',
  headers: {
    'X-Auth-Token': JSON.parse(this.localStorage['ember_simple_auth:session']).user_token
  }
});
