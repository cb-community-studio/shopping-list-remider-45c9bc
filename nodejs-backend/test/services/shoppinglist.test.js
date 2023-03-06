const assert = require('assert');
const app = require('../../src/app');

describe('\'shoppinglist\' service', () => {
  it('registered the service', () => {
    const service = app.service('shoppinglist');

    assert.ok(service, 'Registered the service (shoppinglist)');
  });
});
