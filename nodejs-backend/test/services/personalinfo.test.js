const assert = require('assert');
const app = require('../../src/app');

describe('\'personalinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('personalinfo');

    assert.ok(service, 'Registered the service (personalinfo)');
  });
});
