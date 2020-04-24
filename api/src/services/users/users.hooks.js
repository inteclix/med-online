const { authenticate } = require('@feathersjs/authentication').hooks;
const { NotFound, GeneralError, BadRequest } = require('@feathersjs/errors');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const setIsBeforeCreateUser = async (context) => {
  if (context.data.is === "doctor") {
    context.data.permissions = "[clinic, doctor]"
  }
  return context
}

const createIsAfterCreateUser = async (context) => {
  console.log(context.data)
  if (context.data.is === "doctor") {
    await context.app.service("clinics").create({ name: context.result.username + " clinic" })
      .then((clinic) => {
        context.app.service("doctors").create({
          clinicId: clinic.id,
          userId: context.result.id,
          specialityId: context.data.specialityId,
        })
      })
  }
  return context
}

const getIsAfterGetUser = async (context) => {
  if (context.result.is === "doctor") {
    const { models } = await context.app.get("sequelizeClient")
    try {
      const doctor = await models.doctors.findOne(
        { where: { userId: context.result.id } },
        { include: [models.clinics, models.specialities] }
      )
      context.result.doctor = doctor
    } catch (error) {
      console.log(error)
    }
  }
  return context
}

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [setIsBeforeCreateUser, hashPassword('password')],
    update: [hashPassword('password'), authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [getIsAfterGetUser],
    create: [createIsAfterCreateUser],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
