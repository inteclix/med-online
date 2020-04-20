// Initializes the `Specialities` service on path `/specialities`
const { Specialities } = require('./specialities.class');
const createModel = require('../../models/specialities.model');
const hooks = require('./specialities.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/specialities', new Specialities(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('specialities');

  service.hooks(hooks);
};
