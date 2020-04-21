import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import feathers from "@feathersjs/feathers"
import auth from "@feathersjs/authentication-client"
import rest from "@feathersjs/rest-client"
import { chartjs } from './helpers';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import validators from './common/validators';

import Routes from './Routes';
import AppContext from "./contexts/app-context"


const restClient = rest("https://3030.medda-dz.com");
const api = feathers();
api.configure(restClient.fetch(window.fetch));
api.configure(auth({
  storageKey: 'auth',
  storage: window.localStorage
}))
window.api = api

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};


const App = () => {

  return (
    <AppContext.Provider value={{api: api}}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App