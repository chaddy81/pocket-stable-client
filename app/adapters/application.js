import DS from 'ember-data';

import localStorage from 'simple-auth/stores/local-storage';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: ENV.APP.host
});
