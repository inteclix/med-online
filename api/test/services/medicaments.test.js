const assert = require('assert');
const app = require('../../src/app');

describe('\'Medicaments\' service', () => {
  it('registered the service', () => {
    const service = app.service('medicaments');

    assert.ok(service, 'Registered the service');
  });
});
