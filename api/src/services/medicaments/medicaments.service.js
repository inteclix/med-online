// Initializes the `Medicaments` service on path `/medicaments`
const { Medicaments } = require('./medicaments.class');
const createModel = require('../../models/medicaments.model');
const hooks = require('./medicaments.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/medicaments', new Medicaments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medicaments');

  service.hooks(hooks);
};
