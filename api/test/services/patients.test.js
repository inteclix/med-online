const assert = require('assert');
const app = require('../../src/app');

describe('\'Patients\' service', () => {
  it('registered the service', () => {
    const service = app.service('patients');

    assert.ok(service, 'Registered the service');
  });
});
