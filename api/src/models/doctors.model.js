// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const doctors = sequelizeClient.define('doctors', {

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  doctors.associate = function (models) {
    doctors.belongsTo(models.users)
    doctors.belongsTo(models.clinics)
    doctors.hasOne(models.specialities)
  };

  return doctors;
};
