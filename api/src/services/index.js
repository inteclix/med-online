const users = require('./users/users.service.js');
const medicaments = require('./medicaments/medicaments.service.js');
const doctors = require('./doctors/doctors.service.js');
const clinics = require('./clinics/clinics.service.js');
const specialities = require('./specialities/specialities.service.js');
const secretaries = require('./secretaries/secretaries.service.js');
const patients = require('./patients/patients.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(medicaments);
  app.configure(doctors);
  app.configure(clinics);
  app.configure(specialities);
  app.configure(secretaries);
  app.configure(patients);
};
