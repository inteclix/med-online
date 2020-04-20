// Initializes the `Clinics` service on path `/clinics`
const { Clinics } = require('./clinics.class');
const createModel = require('../../models/clinics.model');
const hooks = require('./clinics.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/clinics', new Clinics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('clinics');

  service.hooks(hooks);
};
