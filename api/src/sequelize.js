const Sequelize = require('sequelize');

module.exports = function (app) {
  const connectionString = app.get('mysql');
  const sequelize = new Sequelize(connectionString, {
    dialect: 'mysql',
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    // uncomment to sedding data in the database and sync
    app.set('sequelizeSync', sequelize.sync({ force: true }).then(() => { seedDB(app) }))


    return result;
  };
};

const seedDB = async (app) => {
  await app.service("specialities").create({
    id: 1,
    name: "generale",
    description: "medcin generale"
  })
  await app.service("specialities").create({
    name: "dentiste",
    description: "medcin dentaire"
  })
  await app.service("users").create({
    id: 1,
    username: "doctor",
    firstname: "seddik",
    lastname: "benzemame",
    password: "0123456789",
    is: "doctor",
    specialityId: 1
  })

  await app.service("medicaments").create({
    CODE: "Doliprane",
  })

}
