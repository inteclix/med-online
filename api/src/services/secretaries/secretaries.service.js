// Initializes the `Secretaries` service on path `/secretaries`
const { Secretaries } = require('./secretaries.class');
const createModel = require('../../models/secretaries.model');
const hooks = require('./secretaries.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/secretaries', new Secretaries(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('secretaries');

  service.hooks(hooks);
};
