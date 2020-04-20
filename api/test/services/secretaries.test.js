const assert = require('assert');
const app = require('../../src/app');

describe('\'Secretaries\' service', () => {
  it('registered the service', () => {
    const service = app.service('secretaries');

    assert.ok(service, 'Registered the service');
  });
});
