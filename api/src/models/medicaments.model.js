// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const medicaments = sequelizeClient.define('medicaments', {
    NUM_ENREGISTREMENT: {
      type: DataTypes.STRING,
    },
    CODE: {
      type: DataTypes.STRING,
    },
    DENOMINATION_COMMUNE_INTERNATIONALE: {
      type: DataTypes.STRING,
    },
    NOM_DE_MARQUE: {
      type: DataTypes.STRING,
    },
    FORME: {
      type: DataTypes.STRING,
    },
    DOSAGE: {
      type: DataTypes.STRING,
    },
    COND: {
      type: DataTypes.STRING,
    },
    LISTE: {
      type: DataTypes.STRING,
    },
    P1: {
      type: DataTypes.STRING,
    },
    P2: {
      type: DataTypes.STRING,
    },
    OBS: {
      type: DataTypes.STRING,
    },

    LABORATOIRES_DETENTEUR_DE_LA_DECISION_DENREGISTREMENT: {
      type: DataTypes.STRING,
    },
    PAYS_DU_LABORATOIRE_DETENTEUR_DE_LA_DECISION_DENREGISTREMENT: {
      type: DataTypes.STRING,
    },
    DATE_DENREGISTREMENT_INITIAL: {
      type: DataTypes.DATE,
    },
    DATE_DENREGISTREMENT_FINAL: {
      type: DataTypes.DATE,
    },
    TYPE: {
      type: DataTypes.STRING,
    },
    STATUT: {
      type: DataTypes.STRING,
    },
    DUREE_DE_STABILITE: {
      type: DataTypes.STRING,
    },
    PRIX_PORTE_SUR_LA_DECISION_DENREGISTREMENT: {
      type: DataTypes.STRING,
    },
    REMBOURSEMENT: {
      type: DataTypes.STRING,
    },
    RESERVE: {
      type: DataTypes.STRING,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  medicaments.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return medicaments;
};
