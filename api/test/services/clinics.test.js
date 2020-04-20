const assert = require('assert');
const app = require('../../src/app');

describe('\'Clinics\' service', () => {
  it('registered the service', () => {
    const service = app.service('clinics');

    assert.ok(service, 'Registered the service');
  });
});
