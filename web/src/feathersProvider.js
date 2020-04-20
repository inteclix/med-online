import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import { restClient } from "ra-data-feathers";

const API_URL = "https://3030.medda-dz.com";

const feathersApp = feathers();
const feathersRestClient = rest(API_URL);
const feathersAuth = auth({
  storageKey: "token"
});

feathersApp.configure(feathersRestClient.fetch(window.fetch));
feathersApp.configure(feathersAuth);

const restClientOptions = {};

export const dataProvider = restClient(feathersApp, restClientOptions);

export const authProvider = {
  login: ({ username, password }) => {
    return feathersApp.authenticate({
      strategy: "local",
      username: username,
      password: password
    });
  },
  logout: () => {
    return feathersApp.logout();
  },
  checkError: error => {
    // ...
  },
  checkAuth: () => {
    return feathersApp.reAuthenticate();
  },
  getPermissions: () => {
    const role = localStorage.getItem("permissions");
    return role ? Promise.resolve(role) : Promise.reject();
  }
};
