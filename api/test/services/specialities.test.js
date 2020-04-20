const assert = require('assert');
const app = require('../../src/app');

describe('\'Specialities\' service', () => {
  it('registered the service', () => {
    const service = app.service('specialities');

    assert.ok(service, 'Registered the service');
  });
});
